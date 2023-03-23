import mongoose from "mongoose";

const {
  Schema,
  model
} = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  }
})

const ProductModel = model('Product', productSchema)

export default ProductModel