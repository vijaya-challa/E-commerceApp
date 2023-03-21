import createError from 'http-errors'
import UserModel from '../models/userModel.js'
import {hash, compare} from 'bcrypt'


export const createNewUser = async (req, res, next) => {

  try {

    const hashedPass = await hash(req.body.password, 10)
    req.body.password =hashedPass
    const newUser = await UserModel.create(req.body)
    res.send({message: "user created"})
  } catch (error) {
    next(createError(404, error.message))
  }
}