import express from 'express'
import ProductModel from '../models/ProductModel.js'
import createError from 'http-errors'

const productRouter = express.Router()


productRouter.get('/', async (req, res, next) => {

  try {
    const allProducts = await ProductModel.find()
    res.send(allProducts)
  } catch (error) {
    next(createError(404, error.message))
  }

})

productRouter.post('/', async (req, res, next) => {

  try {
    const newUser = await ProductModel.create(req.body)
    // console.log(newUser)
    res.send(newUser)
  } catch (error) {
    next(createError(404, error.message))
  }

})

// productRouter.get('/id', (req,res,next)=>{


// })




export default productRouter