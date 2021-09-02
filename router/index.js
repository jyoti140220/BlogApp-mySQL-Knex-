const express=require('express')
const router=express.Router()

router.use('/ssd',require('./signup.router.js'))

module.exports=router