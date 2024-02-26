const express = require("express")
const cors = require("cors")
const {connection} = require("./db")
const { authRoute } = require("./Route/user.route")
const { noteRouter } = require("./Route/pdf.router")
const app = express()

app.use(express.json())
app.use(cors())
app.use('/files' , express.static('files'))
app.get("/" ,(req,res)=>{
    res.send("Homepage")
})

app.use("/user",authRoute)
app.use("/pdf",noteRouter)

app.listen(8080, async()=>{
    try {
        await connection
        console.log("Connected to DB!")
        console.log("Server running at 8080")
    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
    }
    
})