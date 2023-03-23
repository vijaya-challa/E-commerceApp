import express from 'express'
import { getAllProducts, createNewProduct, getAllProductById, updateById, deleteById } from '../controllers/productController.js'
import { productValidation } from '../middleware/productValidator.js'


const productRouter = express.Router()

// get all Products
productRouter.get('/',getAllProducts )

// create new Product
productRouter.post('/',productValidation ,createNewProduct)

// get product by id
productRouter.get('/:id', getAllProductById)

// update specific product
productRouter.put('/:id', updateById)

// delete specific product
productRouter.delete('/:id', deleteById)



export default productRouter