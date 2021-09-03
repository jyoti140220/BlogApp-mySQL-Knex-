const knex=require('../modal/userDetials.js')

const howManyLikeDislike=async(req,res)=>{
    await knex.from('postTable').select('*').then((data)=>{
        return res.status(200).send(data)
    }).catch((err)=>{
        return res.status(400).json({message:err,status:400})
    })
}

module.exports=howManyLikeDislike