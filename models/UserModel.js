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
}, { toJSON: { 
  transform: function (doc, data) {
    delete data.password;
    delete data.__v
    return data;
  }

}, timestamps: true })

const UserModel = model('user', userSchema)
export default UserModel