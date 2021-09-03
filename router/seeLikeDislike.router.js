const express=require('express')
const router=express.Router()

const howManyLikeDislike=require('../controller/seeLikeDislike.js')

router.get('/',howManyLikeDislike)

module.exports=router
