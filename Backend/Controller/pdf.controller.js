const {pdfModel} = require("../Model/pdf.model")

const Upload = async(req,res)=>{
    try {
        const note = new pdfModel({
            user_Id: req.user_Id, // Make sure these values are available in req.body
            user_name: req.user_name,
            name: req.body.name,
            description: req.body.description,
            file: req.file.filename
        })
        await note.save()
        res.status(200).send({msg:"Successfully Uploaded!!" , files:note})
    } catch (error) {
        res.status(404).send({err:error.message})
    }
}


module.exports={Upload}