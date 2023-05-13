
const express = require('express');
const app = express() ; 
const port = process.env.PORT || 5000 ; 
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

app.use(express.json()); 
app.use(cors());


const uri = "mongodb+srv://shafikrasel5:sDHMGPmoZzUsbaVM@cluster0.hjqwlrm.mongodb.net/?retryWrites=true&w=majority";
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
      const database = client.db("PracticeDB");
      const folder = database.collection("PracticeProduct");

      // --- add a new product      
      app.post('/products/add', async(req, res)=>{
        const body = req.body;
        // console.log(body);
        const result = await folder.insertOne(body);
        res.send(result) ; 
      })
      
      // --- get all products
      app.get('/products', async(req,res)=>{
        const query = {} ; 
        const cursor = folder.find(query);
        const result = await cursor.toArray();
        res.send(result) ;
      })
      
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send('Ok got it') ; 
});


app.listen(port, ()=>{
    console.log('Listening to port 5000') ;
})