import {body, validationResult} from 'express-validator'

export const productValidation =async (req,res,next)=>{

  await body('name')
  .exists()
  .withMessage('name required')
  .isString()
  .withMessage('must be a string')
  .trim()
  .notEmpty()
  .withMessage('name should not be empty')
  .run(req)

  await body('description')
  .exists()
  .withMessage('description required')
  .isString()
  .withMessage('should be a string')
  .run(req)
  await body('price')
  .exists()
  .withMessage('price required')
  .isNumeric()
  .if((value)=>{
    return value > 0
  })
  .withMessage('price must be positive')
.run(req)

const errors= validationResult(req)
if(errors.isEmpty()){
next()
}else{
  res.status(422).send({success:false, error:errors.array()})
}

}