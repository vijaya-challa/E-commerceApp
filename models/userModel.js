import mongoose from "mongoose";

const {
  Schema,
  model
} = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength:8
  }
})

const UserModel = model('user', userSchema)
export default UserModel