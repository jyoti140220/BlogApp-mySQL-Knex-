const knex=require('../modal/userDetials.js')


const createPost=async(req,res)=>{
    await knex.from('postTable').insert(req.body).then(()=>{
        return res.status(200).json({message:"Post Created Successfully!!!",status:200})
    }).catch((err)=>{
        return res.status(404).json({message: "Invalid Email-Id",status: 404})
    })   
}

module.exports=createPost