const express = require("express")
const { uploads } = require("../Middleware/multer.middleware")
const { Upload, GET, UPDATE, DELETE } = require("../Controller/pdf.controller")
const { auth } = require("../Middleware/auth.middleware")

const noteRouter = express.Router()
noteRouter.use(auth)
noteRouter.post("/upload" ,uploads.single('file'), Upload)
noteRouter.get("/", GET)
noteRouter.patch("/:id" , uploads.single('file') , UPDATE )
noteRouter.delete("/:id" , DELETE)
module.exports={noteRouter}