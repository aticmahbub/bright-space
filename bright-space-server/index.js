const express = require("express");
const cors = require("cors");
const fs = require("fs");
const http = require("http");
const { Server } = require("socket.io");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { sendEmail } = require("./nodemailer");

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

// create http server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173","https://bright-space.netlify.app"],
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
    const coursesCollection = client
      .db("bright-space-db")
      .collection("courses-collection");
    const meetingCodeCollection = client
      .db("bright-space-db")
      .collection("meetingCodes");
    const cartCollection = client
      .db("bright-space-db")
      .collection("cart-collection");
    const usersCollection = client
      .db("bright-space-db")
      .collection("users-collection");
    const quizCollection = client
      .db("bright-space-db")
      .collection("quiz-collection");
    const questionCollection = client
      .db("bright-space-db")
      .collection("questions-collection");

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
    app.post("/courses", async (req, res) => {
      const coursesInfo = req.body;
      const result = await coursesCollection.insertOne(coursesInfo);
      res.send(result);
    });

    app.get("/courses", async (req, res) => {
      const result = await coursesCollection.find().toArray();
      res.send(result);
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
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    //nodemailer
    app.post('/contact-us', async (req, res) => {
      const { name, emailAddress, webAddress, message } = req.body;
      
      try {
          const info = await sendEmail(name, emailAddress, webAddress, message);
          res.status(200).send(`Email sent successfully: ${info.messageId}`);
      } catch (error) {
          res.status(500).send('Failed to send email');
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
