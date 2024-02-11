const express = require("express")
const { Signup, Login, SingleUser } = require("../Controller/user.controller")
const authRoute = express.Router()

authRoute.post("/signup", Signup)
authRoute.post("/login" , Login)
authRoute.get("/:id", SingleUser)
module.exports={authRoute}