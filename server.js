import express from 'express'
import dotenv from 'dotenv'
import connect from './lib/db.js'
import productRouter from './routes/productRouter.js'




dotenv.config()
const server= express()

const port = process.env.PORT || 3000

server.use(express.json())

server.use('/products', productRouter)




connect()




server.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`)
})