import {
  body,
  validationResult
} from 'express-validator'
import createError from 'http-errors'

export const validateUser = [
  body('email')
  .exists()
  .withMessage('Email is required')
  .isEmail()
  .withMessage('Not a valid email!'),

  body('username')
  .exists()
  .withMessage('username required')
  .trim()
  .notEmpty()
  .withMessage('username should not be empty')
  .isString()
  .withMessage('must be string'),

  body('password')
  .exists()
  .withMessage('Password Required')
  .isStrongPassword()
  .withMessage('password must be strong')
  .isLength({
    min: 8,
    max: 16
  })
  .withMessage('Password must be in range of [8, 16] characters'),

  (req, res, next) => {
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