import createError from 'http-errors'
import jwt from 'jsonwebtoken'

const checkAuth = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization
    if (!accessToken) {
      next(createError(401, "Access Denied!"))
      return
    }
    const token = accessToken.split(' ')[1]
    if (!token) {
      next(createError(401, "Access Denied!"))
      return
    }
    jwt.verify(token, process.env.SECRET, (err, data) => {
      if (err) {
        next(createError(401, err.message))
      }
      req.user = data
      next()
    })
  } catch (error) {
    next(createError(500, error.message))
  }
}

export default checkAuth;