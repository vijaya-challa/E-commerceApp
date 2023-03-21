import express from 'express'
import { getAllProducts, createNewUser, getAllProductById, updateById, deleteById } from '../controllers/productController.js'


const productRouter = express.Router()

// get all Products
productRouter.get('/',getAllProducts )

// create new Product
productRouter.post('/', createNewUser)

// get product by id
productRouter.get('/:id', getAllProductById)

// update specific product
productRouter.put('/:id', updateById)

// delete specific product
productRouter.delete('/:id', deleteById)



export default productRouter