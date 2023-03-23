import {
  body,
  validationResult
} from 'express-validator'
import createError from 'http-errors'

export const validateUser = async (req, res, next) => {
  await body('email')
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('Not a valid Email!')
    .run(req);
  await body('username')
    .exists()
    .withMessage('username required')
    .trim()
    .notEmpty()
    .withMessage('username should not be empty')
    .isString()
    .withMessage('must be string')
    .run(req);
    await body('password')
    .exists()
    .withMessage('Password Required')
    .isLength({min:8, max:16})
    .withMessage('Password must be in range of [8, 16] characters')
    .run(req)


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