const express=require('express');
const app=express()
const cors = require('cors');  
const bodyParser = require('body-parser');
const port=5000
const mongoDB=require('./db')
const createUser=require('./Routes/createUser')
mongoDB();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hellloooo")
})

app.use('/api',createUser)

app.listen(port,()=>{
    console.log(`Port running on ${port}`)
})