const UserModel = require('./User')
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/floristmanagement')
.then(() => console.log('DB connected'))
.catch(err => console.log(err))
//Register API Route
app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(res.json('Data Saved Successfully'))
    .catch(err=>res.json(err))
    })
    //config PORT and Start Server
const PORT = 9000
app.listen(PORT, ()=>{
console.log("Server running on port ${PORT}")
})