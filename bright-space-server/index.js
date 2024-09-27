const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000


//middlewires
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u0npy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        const coursesCollection = client.db('bright-space-db').collection('courses-collection')
        const meetingCodeCollection = client.db('bright-space-db').collection('meetingCodes')
        const cartCollection = client.db('bright-space-db').collection('cart-collection')

        // get all courses
        app.get('/courses', async (req, res) => {
            const result = await coursesCollection.find().toArray()
            res.send(result)
        })


        // get all enrolls
        // app.get('/enrolls', async(req, res) =>{
        //     const result = await cartCollection.find().toArray()
        //     res.send(result)
        // })


        // get specific enrolls
        app.get('/enrolls', async (req, res) => {
            const email = req.query.email
            const query = { email: email }
            const result = await cartCollection.find(query).toArray()
            res.send(result)
        })


        // add to cart
        app.post('/enrolls', async (req, res) => {
            const cartItem = req.body
            // console.log(cartItem);
            const result = await cartCollection.insertOne(cartItem)
            // console.log(result);
            res.send(result)
        })

        app.get('/meetCode', async (req, res) => {
            const result = await meetingCodeCollection.find().toArray();
            console.log(result);
            res.send(result)
        });

        app.post('/meetingCode', async (req, res) => {
            const meetCode = req.body;
            const result = await meetingCodeCollection.insertOne(meetCode);
            res.send(result);
        });


        // await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('BrightSpace is running')
})

app.listen(port, () => {
    console.log(`BrightSpace is running listening on port ${port}`)
})