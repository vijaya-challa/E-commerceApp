import express from 'express'
import ProductModel from '../models/ProductModel.js'
import createError from 'http-errors'

const productRouter = express.Router()

// get all Products
productRouter.get('/', async (req, res, next) => {

  try {
    const allProducts = await ProductModel.find()
    res.send(allProducts)
  } catch (error) {
    next(createError(404, error.message))
  }

})

// create new Product
productRouter.post('/', async (req, res, next) => {

  try {
    const newUser = await ProductModel.create(req.body)
    // console.log(newUser)
    res.send(newUser)
  } catch (error) {
    next(createError(404, error.message))
  }

})


// get product by id
productRouter.get('/:id', async (req, res, next) => {
  try {

    const id = req.params.id
    const getProductById = await ProductModel.findById(id)
    console.log(getProductById)
    res.send(getProductById)
  } catch (error) {
    next(createError(404, error.message))
  }

})


// update specific product

productRouter.put('/:id', async (req, res, next) => {

  try {
    const id = req.params.id

    const findProductAndUpdate = await ProductModel.findByIdAndUpdate({
      _id: id
    }, req.body, {
      new: true
    })
    res.send(findProductAndUpdate)
  } catch (error) {
    next(createError(404, error.message))
  }

})



export default productRouter