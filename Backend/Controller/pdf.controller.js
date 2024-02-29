const { pdfModel } = require("../Model/pdf.model")
const fs = require("fs")

const Upload = async (req, res) => {
    try {
        const note = new pdfModel({
            user_Id: req.user_Id, // Make sure these values are available in req.body
            user_name: req.user_name,
            name: req.body.name,
            description: req.body.description,
            file: req.file.filename
        })
        await note.save()
        res.status(200).send({ msg: "Successfully Uploaded!!", files: note })
    } catch (error) {
        res.status(404).send({ err: error.message })
    }
}

const GET = async (req, res) => {
    try {
        const data = await pdfModel.find({ user_Id: req.user_Id })
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send({err:error.message})
    }

}

const UPDATE = async(req,res)=>{
    const {id} = req.params
    try {
        let file = ""
        if(req.file){
            file=`files/${req.file.filename}`
        }
        req.body.file = file

        const userinfo = await pdfModel.find({_id:id})
        if (userinfo) {
            const presentImg = userinfo[0].file;
            console.log(presentImg, "path");
            console.log(userinfo[0].name);

            if (presentImg) {
                try {
                    fs.unlinkSync(presentImg);
                    console.log('File deleted successfully');
                } catch (unlinkError) {
                    console.error('Error deleting file:', unlinkError);
                }
            } else {
                console.log('No file to delete');
            }
        } else {
            console.log('User not found');
        }

        const updateItem = await pdfModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ msg: `Successfully updated the ${id}!`, data: updateItem })
    } catch (error) {
        res.status(404).send({err:error.message})
    }
}

const DELETE = async(req,res)=>{
    const {id} = req.params
    try {
        const documentDelete = await pdfModel.findById({_id:id})
        console.log(documentDelete,"file")
        
        if(documentDelete){
            const document = documentDelete.file
            console.log(document,"path")
            if(document){
                try {
                    fs.unlinkSync(document)
                    console.log("File is successfully deleted")
                } catch (error) {
                    console.error("Error deleting the file" , unlinkError)
                }
            }
            else{
                console.log('No file to delete');
            }
        }
        else{
            console.log("No document found")
        }

        await pdfModel.findByIdAndDelete(id);
        res.status(200).send({msg:`${id} deleted successfully!`})
    } catch (error) {
        res.status(404).send({err:error.message})
    }
}
module.exports = { Upload,GET,UPDATE,DELETE }