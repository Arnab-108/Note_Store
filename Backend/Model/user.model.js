const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    phone:{type:Number , required:true},
    age:{type:Number},
    avatar:{type:String}
},{
    versionKey:false,
    timestamps:true
})

const userModel = mongoose.model('User' , userSchema)

module.exports={userModel}