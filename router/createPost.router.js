const express=require('express')
const router=express.Router()
const {createToken,varifyToken}=require('../middleware/jwt.js')

const createPost=require('../controller/createPost.js')

router.post('/',varifyToken,createPost)

module.exports=router
