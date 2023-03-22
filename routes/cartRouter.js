import express from 'express'
import { contentOfUser, deleteProduct, productToCart } from '../controllers/cartController.js'

const cartRouter =express.Router()

// Get the contents of a user's shopping cart
cartRouter.get('/', contentOfUser)

// Add a product to a user's shopping cart
cartRouter.post('/', productToCart)


// Remove a product from a user's shopping cart
cartRouter.delete('/:id', deleteProduct)



export default cartRouter