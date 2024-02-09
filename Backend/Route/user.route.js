const express = require("express")
const { Signup } = require("../Controller/user.controller")
const authRoute = express.Router()

authRoute.post("/signup", Signup)

module.exports={authRoute}