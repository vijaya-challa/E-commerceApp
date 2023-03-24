import express from 'express'
import dotenv from 'dotenv'
import connect from './lib/db.js'
import productRouter from './routes/productRouter.js'
import createError from 'http-errors'
import userRouter from './routes/userRouter.js'
import cartRouter from './routes/cartRouter.js'
import checkAuth from './middleware/checkAuth.js'
import logger from 'morgan'
import checkoutRouter from './routes/checkoutRouter.js'

dotenv.config()
const server = express()
connect()
const port = process.env.PORT || 3000

server.use(express.json())
server.use(logger('dev'))

server.use('/products', productRouter)
server.use('/users', userRouter)
server.use('/cart', checkAuth, cartRouter)
server.use('/checkout', checkAuth, checkoutRouter)

server.use('*', (req, res, next) => {
  next({
    status: 404,
    message: "Resources Not Found!"
  })
})

server.use((error, req, res, next) => {
  res.status(error.status || 400).send({
    message: error.message || "Unknown Error"
  })
})


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})