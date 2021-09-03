const express=require('express')
const router=express.Router()
const {likePost,disLikePost}=require('../controller/likeDislike.js')

router.put('/like/:id',likePost)
router.put('/dislike/:id',disLikePost)

module.exports=router