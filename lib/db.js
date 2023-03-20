import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_NAME
} = process.env

const connect = () => {
  const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}${DB_HOST}/${DB_NAME}`
  mongoose.connect(connectionString)
    .then(() => {
      console.log('DB Connected')
    }).catch((error) => {
      console.log(error.message)
    })
}

export default connect