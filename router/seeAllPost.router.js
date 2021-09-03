const express=require('express')
const router=express.Router()

const seeAllPos=require('../controller/seeAllPost.js')

router.get('/',seeAllPos)

module.exports=router
