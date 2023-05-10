
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

// user : rasel@admin
// password : iWG5unDU11BUOHwz
const uri = "mongodb+srv://rasel:iWG5unDU11BUOHwz@cluster0.0ihcm8w.mongodb.net/?retryWrites=true&w=majority";

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
    const database = client.db("second_try");
    const movies = database.collection("movies");

    console.log('Document inserted successfully');

    // --- adding new user
    app.post('/users/add', async (req, res) => {
      const body = req.body;
      console.log(body);

      const result = await movies.insertOne(body);
      res.send(result);
    })

    // --- getting all user
    app.get('/users', async (req, res) => {
      const query = {};
      const cursor = movies.find(query);
      const allUsers = await cursor.toArray();

      res.send(allUsers);
    })

    // --- deleting a user
    app.delete('/deleteUser/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movies.deleteOne(query);
      res.send(result);
    })

    // --- get a single user
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await movies.findOne(query);
      res.send(result);
    })

    // --- update a user
    app.patch(`/user/:id`, async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      console.log(body);

      const filter = { _id: new ObjectId(id) };
      // this option instructs the method to create a document if no documents match the filter
      const options = { upsert: true };
      // 
      const updateDoc = {
        $set: {
          name: body.name,
          email : body.email
        },
      };

      const result = await movies.updateOne(filter, updateDoc, options);
      res.send(result);
    })

  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Welcome to server');
})

app.listen(port, () => {
  console.log('Listening to port 5000 ')
})



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.0ihcm8w.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
