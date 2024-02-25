const express = require("express")
const { Signup, Login, SingleUser, UpdateUser, allUser } = require("../Controller/user.controller")
const { uploads } = require("../Middleware/multer.middleware")
const { auth } = require("../Middleware/auth.middleware")
const authRoute = express.Router()

authRoute.post("/signup", Signup)
authRoute.post("/login" , Login)
authRoute.use(auth)
authRoute.get("/",allUser)
authRoute.get("/:id", SingleUser)
authRoute.patch("/:id" , uploads.single('avatar') , UpdateUser)
module.exports={authRoute}