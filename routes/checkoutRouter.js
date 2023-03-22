import express from 'express'
import {checkOut} from '../controllers/checkOutController.js'


const checkoutRouter = express.Router()

checkoutRouter.post('/', checkOut)


export default checkoutRouter