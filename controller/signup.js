const knex=require('../modal/userDetials.js')
const joi=require('@hapi/joi')
const bcrypt=require('bcrypt')
const {createToken,varifyToken}=require('../middleware/jwt.js')


const signup=async(req,res)=>{
    var reqdata = req.body
    const authschema=joi.object({
        name:joi.string().min(3).max(10).required(),
        password:joi.string().required(),
        email:joi.string().email().lowercase().required(),
    
    })
    const result=authschema.validate(reqdata)
    if(result.error){
        return res.status(400).send(result.error.details[0].message)
    }else{
        console.log("data validate")
    }
    try {  

        const userExits=await knex.from('users').select('*').where('email',reqdata.email)
        if (userExits.length>0){
            const token= createToken({email:req.body.email},process.env.SECRET_KEY,{expiresIn: '24h' })
            res.cookie('token', token)
            return res.status(208).json({
                message:"Email Is Already Exists",
                status:208
            })
        }else{
            const salt = await bcrypt.genSalt(10);
            reqdata.password = await bcrypt.hash(reqdata.password, salt);
            await knex.from('users').insert(reqdata)
            .then(()=>{
                const token= createToken({email:req.body.email},process.env.SECRET_KEY,{expiresIn: '24h' })
                res.cookie('token', token)
                return res.status(200).json({
                    message:"You Have Signup Succesfully!!",
                    status:200})})
            .catch((err)=>{
                return res.status(400).send(err)
            })
            
        }
    } catch (err) {
        return res.status(400).send(err)
         
    }
}


module.exports=signup