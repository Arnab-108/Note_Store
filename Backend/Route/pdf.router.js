const express = require("express")
const { uploads } = require("../Middleware/multer.middleware")
const { Upload } = require("../Controller/pdf.controller")
const { auth } = require("../Middleware/auth.middleware")

const noteRouter = express.Router()
noteRouter.use(auth)
noteRouter.post("/upload" ,uploads.single('file'), Upload)


module.exports={noteRouter}