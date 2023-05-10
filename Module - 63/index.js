
const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const cors = require('cors');

app.use(express.json());
app.use(cors());

let users = [
    { name: 'Russell', age: 28, profession: 'Programmer', id: 1 },
    { name: 'Abir', age: 27, profession: 'Banker', id: 2 },
    { name: 'Shafik', age: 29, profession: 'Mariner', id: 3 },
]

app.get('/', (req, res) => {
    res.send('Where have all the young girls gone ? ');
})

app.get('/users', (req, res) => {
    const query = req.query.name;
    if (query) {
        const searchedName = users.filter(index => index.name.toLowerCase().includes(query));
        res.send(searchedName);
    } else {
        res.send(users);
    }
})

app.post('/users', (req, res)=>{
    
})

app.get('/users/:id', (req, res) => {
    const params = req.params;
    const id = params.id;
    const searchedUser = users.find(index => index.id == id);
    res.send(searchedUser);
})

// app.get('/users?query=russell', (req, res)=> {
//     const query = req.query;
//     console.log(query);
// })

app.listen(port, () => {
    console.log('listening');
})