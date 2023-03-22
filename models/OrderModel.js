import mongoose from "mongoose";

const {
  Schema,
  model
} = mongoose

const orderSchema = new Schema({

  totalPrice: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})


const OrderModel = model('order', orderSchema)
export default OrderModel