import {
  body,
  validationResult
} from 'express-validator'

export const productValidation =  [

  body('name')
  .exists()
  .withMessage('name required')
  .isString()
  .withMessage('must be a string')
  .trim()
  .notEmpty()
  .withMessage('name should not be empty'),


body('description')
  .exists()
  .withMessage('description required')
  .isString()
  .withMessage('should be a string'),

body('price')
  .exists()
  .withMessage('price required')
  .isInt({min:0})
  .withMessage('Number should be in positive'),
  (req,res,next)=>{
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      next()
    } else {
      res.status(422).send({
        success: false,
        error: errors.array()
      })
    }
  }
]

  


  
