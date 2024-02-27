const { pdfModel } = require("../Model/pdf.model")

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

        const userinfo = pdfModel.find({_id:id})
        console.log(userinfo, "user")
        const persentImg = userinfo.file
        console.log(persentImg, "img")
        if (persentImg) {
            fs.unlinkSync(DIR + persentImg)
        }

        const updateItem = await pdfModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ msg: `Successfully updated the ${id}!`, data: updateItem })
    } catch (error) {
        res.status(404).send({err:error.message})
    }
}

module.exports = { Upload,GET,UPDATE }