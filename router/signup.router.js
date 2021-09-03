const express=require('express')
const router=express.Router()
const signup=require('../controller/signup.js')
router.post('/',signup)
module.exports=router