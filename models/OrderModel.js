import mongoose from "mongoose";

const {
  Schema,
  model
} = mongoose

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
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