const express=require('express');
const app=express()
const cors = require('cors');  
const bodyParser = require('body-parser');
const port=5000
const mongoDB=require('./db')
const createUser=require('./Routes/createUser')
const displayData=require('./Routes/displayData')
mongoDB();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hellloooo")
})

app.use('/api',createUser)
app.use('/api',displayData)

app.listen(port,()=>{
    console.log(`Port running on ${port}`)
})