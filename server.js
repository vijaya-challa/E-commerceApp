import express from 'express'
import dotenv from 'dotenv'
import connect from './lib/db.js'
import productRouter from './routes/productRouter.js'
import createError from 'http-errors'




dotenv.config()
const server = express()

const port = process.env.PORT || 3000

server.use(express.json())

server.use('/products', productRouter)

connect()

server.use('*', (req, res, next) => {
  next({
    status: 404,
    message: "Resources Not Found!"
  })
})

server.use((error, req, res, next) => {
  res.status(error.status || 400).send({
    message: error.message || "unknown Error"
  })
})


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})