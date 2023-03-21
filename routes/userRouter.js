import express from 'express'
import { createNewUser } from '../controllers/userController.js'

const userRouter =express.Router()

userRouter.post('/', createNewUser)
















export default userRouter