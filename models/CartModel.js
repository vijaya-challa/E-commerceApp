import mongoose from "mongoose";


const {Schema, model}= mongoose

const cartSchema = new Schema({
  userId:{type:Schema.Types.ObjectId, ref:'user'},
  products:[{type:Schema.Types.ObjectId, ref:'Product'}]
})


const CartModel = model('cart', cartSchema)
export default CartModel;