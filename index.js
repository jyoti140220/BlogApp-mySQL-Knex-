const express=require('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT
const app=express()
app.use(express.json())

app.use('/',require('./router/index.js'))

app.listen(9000,()=>{console.log("server is running........")})