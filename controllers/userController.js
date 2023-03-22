import createError from 'http-errors'
import UserModel from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import {
  hash,
  compare
} from 'bcrypt'

// new user
export const createNewUser = async (req, res, next) => {

  try {

    const hashedPass = await hash(req.body.password, 10)
    req.body.password = hashedPass
    const newUser = await UserModel.create(req.body)
    res.send({
      message: "user created"
    })
  } catch (error) {
    next(createError(404, error.message))
  }
}

// login
export const logInToPlatform = async (req, res, next) => {
  try {

    const checkExistEmail = await UserModel.findOne({
      email: req.body.email
    })

    if (!checkExistEmail) {
      next(createError(401, "Credential Failed"))
      return
    }
    const successLogin = await compare(req.body.password, checkExistEmail.password)
    if (!successLogin) {
      next(createError(401, "Credential Failed"))
    }

    const option = {
      expiresIn: "100m"
    }

    const token = jwt.sign({
      id: checkExistEmail._id  
    }, process.env.SECRET, option)
    res.send({
      checkExistEmail,
      token
    })

  } catch (error) {
    next(createError(404, error.message))
  }
}

export const logOutFromPlatform = (req,res,next)=>{




}











export const getAllUsers = async (req, res, next) => {

  try {
    const allUSers = await UserModel.find()
    res.send(allUSers)
  } catch (error) {
    next(createError(404, error.message))
  }


}