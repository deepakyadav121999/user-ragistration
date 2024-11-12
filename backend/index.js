const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json())

let users =[];
let userid = 1;
app.get('/users',(req,res)=>{
    res.json(users)
})
app.listen(PORT,()=>{
    console.log('i am comming');
    
})
app.post('/users',(req,res)=>{
 const {name, email, dob} = req.body;
 const newUser = {id:userid+1, name, email, dob}
 users.push(newUser);
 res.json(newUser)
})

app.put('/users/:id',(req,res)=>{
    const{id} = req.params;
    const {name, email, dob} = req.body;
    const user = users.find(user => user.id == id);
    if(user){
        user.name = name;
        user.email = email;
        user.dob = dob;
        res.json(user)
    }
    else{
        res.status(404).json({message:'error! invalid user'})
    }
})

app.delete('/users/:id',(req,res)=>{
const{id}= req.params;
users = users.filter(user=> user.id !=id);
res.json({message: "user successfully deleted"})
})