const knex=require('../modal/userDetials.js')

const likePost=async(req,res)=>{
    const likeOfPost=await knex.from('postTable').select('like').where('id',req.params.id)
    if(likeOfPost.length>0){
        var like=likeOfPost[0].like+1
        await knex.from('postTable').update({like:like}).where('id',req.params.id).then(()=>{
            return res.status(200).json({message:"You Like This Post..",status:200})
        }).catch((err)=>{
            return res.status(400).json({status:400,message:err})
        })
    }else{
        return res.status(404).json({message:"By This Id Post Are Not Avilable....",status:404})
    }
}

const disLikePost=async(req,res)=>{
    const disLikeOfPost=await knex.from('postTable').select('dislike').where('id',req.params.id)
    if(disLikeOfPost.length>0){
        var dislike=disLikeOfPost[0].dislike+1
        await knex.from('postTable').update({dislike:dislike}).where('id',req.params.id).then(()=>{
            return res.status(200).json({message:"You Dislike This Post..",status:200})
        }).catch((err)=>{
            return res.status(400).json({status:400,message:err})
        })
    }else{
        return res.status(404).json({message:"By This Id Post Are Not Avilable....",status:404})
    }
}

module.exports={likePost,disLikePost}