import express from 'express'

const productRouter =express.Router()


productRouter.get('/', (req,res,next)=>{

  console.log('test is successfull')
  res.send('This is product get method')
})




export default productRouter