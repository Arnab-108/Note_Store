const { userModel } = require("../Model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const fs = require('fs')

const Signup = async (req, res) => {
    const { name, email, password, phone, age } = req.body

    const user = await userModel.findOne({ email: email })
    if (user) {
        res.status(200).send({ msg: "User already exists. Please login!" })
    }
    else {
        try {
            bcrypt.hash(password, 5, async (err, hash) => {
                const data = userModel({ name, email, password: hash, age, phone, avatar: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" })
                await data.save()
                res.status(200).send({ msg: "User registered successfully", user: data })
            })
        } catch (error) {
            res.status(404).send(error)
        }
    }
}

const Login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email: email })

        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ user_id: user._id, user_name: user.name, avatar: user.avatar }, "indi", {
                        expiresIn: "2d"
                    })

                    res.status(200).send({ msg: "Logged in successfully!", token: token, user_id: user._id, avatar: user.avatar })
                }
                else {
                    res.status(200).send({ msg: "Incorrct Password!" })
                }
            })
        }
        else {
            res.status(200).send({ err: "User dosen't exists. Please Signup!" })
        }
    } catch (error) {
        res.status(404).send({ err: error })
    }

}

const allUser = async (req, res) => {
    try {
        const data = await userModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send({ err: error })
    }
}


const SingleUser = async (req, res) => {
    const { id } = req.params
    try {
        const data = await userModel.find({ _id: id })
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send({ err: error })
    }
}

const UpdateUser = async (req, res) => {
    const { id } = req.params
    try {
        let imgurl = ""
        if (req.file) {
            imgurl = `files/${req.file.filename}`
        }
        req.body.avatar = imgurl

        const userinfo = await userModel.findById({_id:id})
        if (userinfo) {
            const presentImg = userinfo.avatar;
            console.log(presentImg, "path");
            console.log(userinfo.name);

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

        const updateItem = await userModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({ msg: `Successfully updated the ${id}!`, data: updateItem })
    } catch (error) {
        res.status(404).send({ err: error })
    }
}


module.exports = { Signup, Login, SingleUser, UpdateUser, allUser }