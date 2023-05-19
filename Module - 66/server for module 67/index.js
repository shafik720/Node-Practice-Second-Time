
const express = require ('express');
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require('cors');

app.use(express.json()) ;
app.use(cors()) ; 

app.get('/', (req, res)=>{
    res.send('Trying again') ; 
})


app.listen(port, ()=>{
    console.log('Listening to port 5000 '); 
})