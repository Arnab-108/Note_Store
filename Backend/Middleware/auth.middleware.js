const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]

    if(token){
        try {
            const decoded = jwt.verify(token,"indi")
            if(decoded){
                console.log(decoded)
                req.user_Id = decoded.user_id
                req.user_name = decoded.user_name
                next()
            }
            else{
                res.send({msg:"Please login first!"})
            }
        } catch (error) {
            res.send({msg:"Please login first!"})
        }
    }
    else{
        res.send({msg:"Please login first!"})
    }
}

module.exports={
    auth
}