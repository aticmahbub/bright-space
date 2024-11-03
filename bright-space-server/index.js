const express = require('express')
const cors = require('cors')
const { Server } = require('socket.io'); // Import Server from socket.io

const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
require('dotenv').config()
const http = require('http'); // Import the http module
const app = express()
const port = process.env.PORT || 3000


//middlewares
app.use(cors({
  origin: ["http://localhost:5173", "https://bright-space.netlify.app", "https://bright-space-web.netlify.app"],
  optionsSuccessStatus: 200
}));
app.use(express.json());

// create http server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://bright-space.netlify.app", "https://bright-space-web.netlify.app"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u0npy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        const coursesCollection = client.db('bright-space-db').collection('courses-collection')
        const meetingCodeCollection = client.db('bright-space-db').collection('meetingCodes')
        const cartCollection = client.db('bright-space-db').collection('cart-collection')
        const usersCollection = client.db('bright-space-db').collection('users-collection')
        const quizCollection = client.db('bright-space-db').collection('quiz-collection')
        const questionCollection = client.db('bright-space-db').collection('questions-collection')
        const enrollmentsCollection = client.db('bright-space-db').collection('enrollment-collection')

    //jwt related api
    app.post("/meetingToken", (req, res) => {
      const { name, email, role, userId } = req.body;

      if (!name || !email || !role || !userId) {
        return res.status(400).send({ error: "Missing user information" });
      }

      const currentTime = Math.floor(Date.now() / 1000);
      const expTime = currentTime + 60 * 60;

      const payload = {
        aud: "jitsi",
        iss: "chat",
        iat: currentTime,
        exp: expTime,
        nbf: currentTime,
        sub: process.env.JITSI_APP_ID,
        context: {
          features: {
            livestreaming: true,
            "outbound-call": true,
            "sip-outbound-call": false,
            transcription: true,
            recording: role === "teacher" ? true : false,
          },
          user: {
            "hidden-from-recorder": false,
            moderator: role === "teacher" ? true : false,
            name: name,
            id: userId,
            avatar: "",
            email: email,
          },
        },
        room: "*",
      };

      try {
        const privateKey = fs.readFileSync(
          process.env.JITSI_PRIVATE_KEY,
          "utf8"
        );
        const kid = process.env.JITSI_API_KEY;

        const token = jwt.sign(payload, privateKey, {
          algorithm: "RS256",
          header: { kid },
        });

        res.send({ token });
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to generate token" });
      }
    });

    // real time interactions or notifications with socket
    io.on("connection", (socket) => {
      socket.on("sendNotification", (notification) => {
        io.emit("getNotification", { notification });
      });
      // console.log(socket.handshake.auth);

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });

    // get all users
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // get all quizes
    app.get("/quiz", async (req, res) => {
      const result = await quizCollection.find().toArray();
      res.send(result);
    });

    // get specific enrolls
    app.get("/enrolls", async (req, res) => {
      const email = req.query.email;
      const query = {
        email: email,
      };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    // add to cart
    app.post("/enrolls", async (req, res) => {
      const cartItem = req.body;
      // console.log(cartItem);
      const result = await cartCollection.insertOne(cartItem);

      res.send(result);
    });
    // add quiz
    app.post("/quiz", async (req, res) => {
      const newQuestion = req.body;
      // console.log(cartItem);
      const result = await quizCollection.insertOne(newQuestion);

      res.send(result);
    });

    // Meeting code related apis
    app.get("/meetCode/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        meetCode: id,
      };
      const result = await meetingCodeCollection.findOne(query);
      res.send(result);
    });

    app.post("/meetingCode", async (req, res) => {
      const meetingCode = req.body;
      const result = await meetingCodeCollection.insertOne(meetingCode);
      res.send(result);
    });

        // create new courses or add courses api
        
        app.post('/courses', async(req, res)=>{
            const coursesInfo = req.body;
            const result = await coursesCollection.insertOne(coursesInfo)

            res.send(result)

        })

        
        app.get('/courses', async (req, res) => {
            const result = await coursesCollection.find().toArray()
            res.send(result)
        })

        app.get('/courses/:id', async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id) // Assuming you're still using ObjectId
            };
            
            try {
                const result = await coursesCollection.findOne(query);
                if (result) {
                    res.send(result);
                } else {
                    res.status(404).send({ message: 'Course not found' });
                }
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Internal server error' });
            }
        });

        app.post('/enroll', async (req, res) => {
            const { courseId, enrolledStudentEmail } = req.body; // Adjust based on what data you need
        
            if (!courseId || !enrolledStudentEmail) {
                return res.status(400).send({ message: "Course ID and User ID are required." });
            }
        
            const enrollmentData = {
                courseId,
                enrolledStudentEmail,
                enrolledAt: new Date(), // Store the enrollment date
            };
        
            try {
                const result = await enrollmentsCollection.insertOne(enrollmentData); // Insert the enrollment record
                res.status(201).send(result); // Respond with the result
            } catch (error) {
                console.error('Error enrolling in course:', error);
                res.status(500).send({ message: "Internal server error" });
            }
        });
        
        app.get('/enrollments/:email', async (req, res) => {
            const email = req.params.email;
        
            try {
                // Fetch enrollments where enrolledStudentEmail matches the email parameter
                const enrollments = await enrollmentsCollection.find({ enrolledStudentEmail: email }).toArray();
        
                // If no enrollments are found, return a 404 message
                if (enrollments.length === 0) {
                    return res.status(404).send({ message: 'No enrollments found for this email.' });
                }
        
                // Extract courseIds and convert them to ObjectId
                const courseIds = enrollments.map(enroll => new ObjectId(enroll.courseId));
        
                // Fetch courses that match these courseIds from coursesCollection
                const courses = await coursesCollection.find({ _id: { $in: courseIds } }).toArray();
        
                res.send(courses);
            } catch (error) {
                console.error("Error fetching enrolled courses:", error);
                res.status(500).send({ message: 'Internal server error' });
            }
        });
        
          


    // Question related api
    app.post("/questions", async (req, res) => {
      const questionInfo = req.body;
      const result = await questionCollection.insertOne(questionInfo);
      res.send(result);
    });

    app.get("/questions", async (req, res) => {
      const result = await questionCollection.find().toArray();
      res.send(result);
    });

    // upvote and downvote related
    app.post("/questions/:id/vote", async (req, res) => {
      try {
        const { id } = req.params;
        const { userId, voteType } = req.body;
        const query = { _id: new ObjectId(id) };
        const question = await questionCollection.findOne(query);

        console.log(question);

        if (!question.voters) {
          question.voters = [];
        }

        const userVote = question.voters.find(
          (voter) => voter.userId === userId
        );

        if (userVote) {
          return res.status(400).send({
            message: "user has already taken",
          });
        }

        let updateQuery;
        if (voteType === "upvote") {
          updateQuery = {
            $inc: {
              upVotes: 1,
            },
            $push: {
              voters: {
                userId,
                voteType,
              },
            },
          };
        } else if (voteType === "downvote") {
          updateQuery = {
            $inc: {
              upVotes: -1,
            },
            $push: {
              voters: {
                userId,
                voteType,
              },
            },
          };
        }

        const result = await questionCollection.updateOne(query, updateQuery);
        res.send(result);
      } catch (error) {
        console.log(error);
      }
    });

    // answer on Q and A  page
    app.post("/questions/:id/answer", async (req, res) => {
      try {
        const { id } = req.params;
        const { questionId, userEmail, userName, answer } = req.body;
        const query = { _id: new ObjectId(id) };
        const question = await questionCollection.findOne(query);

        const newAnswer = {
          questionId: questionId,
          userEmail: userEmail,
          userName: userName,
          answer: answer,
          date: new Date(),
        };

        const updateQuery = {
          $push: { answers: newAnswer },
        };

        const result = await questionCollection.updateOne(query, updateQuery);

        res.send(result);
      } catch (error) {
        console.log(error);
      }
    });

        // users related api
        app.post('/users', async (req, res) => {
            const user = req.body
            const result = await usersCollection.insertOne(user)
            res.send(result)
        })
        app.put('/users/:email', async (req, res) => {
            const email = req.params.email; // Get the email from the URL
            const updatedUserData = req.body; // Get updated data from request body
            console.log(email, updatedUserData)
            try {
              const result = await usersCollection.updateOne(
                { email: email }, // Find the user by email
                { $set: updatedUserData } // Update user data
              );
          
              if (result.matchedCount === 0) {
                return res.status(404).send('User not found');
              }
          
              res.send({ message: 'Profile updated successfully', result });
            } catch (error) {
              console.error('Error updating user:', error);
              res.status(500).send('Internal Server Error');
            }
          });

        


    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({
      ping: 1,
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }


}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("BrightSpace is running");
});

server.listen(port, () => {
  console.log(`BrightSpace is running listening on port ${port}`);
});
