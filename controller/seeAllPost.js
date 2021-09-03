const knex=require('../modal/userDetials.js')

const seeAllPost=async(req,res)=>{
    await knex.from('postTable').select('id','post','description')
    .then((data)=>{
        return res.status(200).json({total_post:data.length,posts:data})
    })
    .catch((err)=>{
        return res.status(400).json({status:400,message:err})
    })
}

module.exports=seeAllPost