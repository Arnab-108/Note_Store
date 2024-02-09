const express = require("express")
const cors = require("cors")
const {connection} = require("./db")
const { authRoute } = require("./Route/user.route")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/" ,(req,res)=>{
    res.send("Homepage")
})

app.use("/user",authRoute)

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