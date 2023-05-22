
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
require('dotenv').config();

// --- mongodb functionality
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const userDatabase = client.db("Car_Service_Practice").collection('Users');

        // --- getting all the service details from server
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        // --- getting single service details
        app.get('/service/:id', async(req, res)=>{
            const {id} = req.params;

            // const query =  {_id : new ObjectId(id)};
            const query =  {service_id: id};
            
            const result = await serviceCollection.findOne(query);
            
            res.send(result) ; 
        })

        //   --- add a user
        app.put('/addUser', async (req, res) => {
            const filter = { email: req.body.email }
            const options = { upsert: true }

            const updatedDoc = {
                $set: {
                    email: req.body.email,
                    displayName: req.body.displayName,
                    role: req.body.role
                }
            }
            const result = await userDatabase.updateOne(filter, updatedDoc, options);
            res.send(result)
        })


        // --- update a user with new bookings
        app.put('/user/addBooking', async (req, res) => {
            const {email, bookingDetails} = req.body ; 
            const filter = { email: req.body.email };

            const update = {
                $addToSet: {
                    'bookings': bookingDetails
                }
            }
            const result = await userDatabase.findOneAndUpdate(filter, update);
            res.send(result);
        })

        // --- delete a bookings 
        app.put('/bookings/delete', async(req, res)=>{
            const{email, id} = req.body;
            const filter = {email : email}
            
            const update = {
                $pull : {
                    bookings : {service_id : id}
                }
            }
            const result = await userDatabase.findOneAndUpdate(filter, update, {returnOriginal : false}) ; 
            console.log(result);
            res.send(result);
        })

        // --- get a single user data
        app.get('/users/:email', async(req, res)=>{
            const params = req.params;
            const{email} = params;
            const query = {email : email};
            const result = await userDatabase.findOne(query);
            res.send(result)
        })

        // --- get single booking details
        app.get('/bookings/singleBookings', async (req, res) => {
            const { email } = req.query;

            const query = { 'user.email': email };
            const result = await bookedServiceCollection.findOne(query);
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



/* user : {
    email : rasel@gmail.com,
    name : rasel,
    hobby : [
        {title : 'singing', title_id : 1},
        {title : 'boating', title_id : 2},
        {title : 'dancing', title_id : 3},
    ]
} */
