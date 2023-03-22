import createError from 'http-errors'
import mongoose from 'mongoose'
import CartModel from '../models/CartModel.js'
import ProductModel from '../models/ProductModel.js'
import UserModel from '../models/UserModel.js'

// Get the contents of a user's shopping cart
export const contentOfUser = async (req, res, next) => {
  try {
    const userId = req.user.id
    const userCart = await CartModel.findOne({
      userId
    })
    if (!userCart) {
      next(createError(401, "cart is empty"))
      return
    }
    const user = await UserModel.findOne({
      _id: userId
    })
    const productPromises = userCart.products.map(async (productId) => {
      const product = await ProductModel.findOne({
        _id: productId
      })
      // return {
      //   name: product.name,
      //   description: product.description,
      //   price: product.price
      // };
      return product
    })
    const products = await Promise.all(productPromises)
    res.send({
      products
    })
  } catch (error) {
    next(createError(404, error.message))
  }
}

// Add a product to a user's shopping cart
export const productToCart = async (req, res, next) => {
  try {
    const userId = req.user.id

    const userCart = await CartModel.findOne({
      userId: userId
    })
    const productId = req.body.product
    if (userCart) {
      console.log('if case')
      const cart = await CartModel.findOne({
        userId
      })
      cart.products.push(productId)
      const message = await cart.save()
      res.send(message)
    } else {
      const msg = await CartModel.create({
        userId: userId,
        products: [productId]
      })
      res.send(msg)
    }
  } catch (error) {
    next(createError(404, error.message))
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const productsId = req.params.id
    const userId = req.user.id
    const cart = await CartModel.findOne({
      userId
    })
    if (!cart) {
      next(createError(401, "cart is empty"))
      return
    }
    cart.products.pull(productsId)
    const message = await cart.save()
    res.send({message: "Product removed from cart"})
  } catch (error) {
    next(createError(404, error.message))
  }
}