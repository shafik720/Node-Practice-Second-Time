
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
require('dotenv').config();

// --- mongodb functionality
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PASSWORD}@cluster0.ddq9cat.mongodb.net/?retryWrites=true&w=majority`;
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
        const serviceCollection = client.db("Car_Service_Practice").collection('Services');
        const bookedServiceCollection = client.db("Car_Service_Practice").collection('Bookings');

        // --- getting all the service details from server
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        //   --- add bookings
        app.post('/bookings/add', async(req, res)=>{
            const body = req.body;
            const result = await bookedServiceCollection.insertOne(body);
            res.send(result);
            // console.log(body);
        })

        // --- get single booking details
        app.get('/bookings/singleBookings', async(req, res)=>{
            const{email} = req.query ; 

            const query = {'user.email' : email} ;
            const result = await bookedServiceCollection.findOne(query) ;
            // console.log(result); 
            res.send(result); 
        })

    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Trying again');
})


app.listen(port, () => {
    console.log('Listening to port 5000 ');
})


/* 
user : {
    email : rasel@gmail.com,
    name : rasel
}
*/