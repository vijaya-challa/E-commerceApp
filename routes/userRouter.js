import express from 'express'
import { createNewUser, getAllUsers, logInToPlatform, logOutFromPlatform } from '../controllers/userController.js'

const userRouter =express.Router()

// get all users
userRouter.get('/', getAllUsers)

// create new User
userRouter.post('/', createNewUser)


// login to platform
userRouter.post('/login', logInToPlatform)

// logout of the platform
userRouter.post('/logout', logOutFromPlatform)

















export default userRouter