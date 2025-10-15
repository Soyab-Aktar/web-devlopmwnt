const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middle wire
app.use(cors());
app.use(express.json());

const users = [
    {id:1, name: 'Soyab', email:'soyab23@gmail.com'},
    {id:2, name: 'EVO', email:'evo@gmail.com'},
    {id:3, name: 'Chirag', email:'chirag@gmail.com'},
    {id:4, name: 'Hasira', email:'hasira@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('Hello, its User Management server is running')
})

app.get('/users',(req,res)=>{
    res.send(users);
})
app.post('/users',(req,res)=>{
    console.log('post api hitting');
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Surver is running on Port : ${port}`)
})

