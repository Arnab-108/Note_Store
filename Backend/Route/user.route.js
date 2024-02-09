const express = require("express")
const { Signup, Login } = require("../Controller/user.controller")
const authRoute = express.Router()

authRoute.post("/signup", Signup)
authRoute.post("/login" , Login)

module.exports={authRoute}