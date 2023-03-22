import OrderModel from "../models/OrderModel.js"
import CartModel from "../models/CartModel.js"
import createError from 'http-errors'
import ProductModel from "../models/ProductModel.js"

export const checkOut = async (req, res, next) => {

  try {
    const userId = req.user.id
    const cart = await CartModel.findOne({
      userId
    })
    if (!cart) {
      next(createError(404, "cart is empty"))
      return
    }
    const pricesPromise = cart.products.map(async (productId) => {
      const product = await ProductModel.findOne({
        _id: productId
      })
      return product.price
    })
    const prices = await Promise.all(pricesPromise)
    const totalPrice = prices.reduce((price, sum) => {
      return sum + price
    })

    res.send({total:totalPrice})
  } catch (error) {
    next(createError(404, error.message))
  }
}