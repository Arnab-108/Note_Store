const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {userModel} =  require("../Model/user.model")

const Signup = async(req,res)=>{
    const {name,email,password,age} = req.body

    const user = await userModel.findOne({email:email})
    if(user){
        res.status(200).send({mag:"User already exists. Please login!"})
    }
    else{
        try {
            bcrypt.hash(password,5,async(err,hash)=>{
                const data = userModel({name,email,password:hash,age,avatar:"https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"})
                await data.save()
                res.status(200).send({mag:"User registered successfully" , user:data})
             })
        } catch (error) {
            res.status(404).send(error)
        }
    }
}

module.exports={Signup}