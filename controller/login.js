const knex=require('../modal/userDetials.js')
const joi=require('@hapi/joi')
const bcrypt=require('bcrypt')
const {createToken,varifyToken}=require('../middleware/jwt.js')


const login = async (req, res) => {
    const data1=await knex.from('users').select('*').where('email',req.body.email)
    if(data1.length>0){
        const comaparePassword = await bcrypt.compare(req.body.password, data1[0].password)
        if (comaparePassword) {
            const token= createToken({email:req.body.email},process.env.SECRET_KEY,{expiresIn: '24h' })
            res.cookie('token', token)
            return res.status(200).json({message: "You Have Logged Successfully!!!",status: 200})
        }else{
            return res.status(404).json({message: "Invalid Password",status: 404})
        }
    }else{
        return res.status(404).json({message: "Invalid Email-Id",status: 404})
    }
}

module.exports = login