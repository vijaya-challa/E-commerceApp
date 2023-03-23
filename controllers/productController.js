import ProductModel from "../models/ProductModel.js";
import createError from 'http-errors'



export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await ProductModel.find()
    res.send(allProducts)
  } catch (error) {
    next(createError(404, error.message))
  }
}

export const createNewProduct = async (req, res, next) => {
  try {
    const newUser = await ProductModel.create(req.body)
    res.send(newUser)
  } catch (error) {
    next(createError(404, error.message))
  }
}

export const getAllProductById = async (req, res, next) => {
  try {
    const id = req.params.id
    const getProductById = await ProductModel.findById(id)
    res.send(getProductById)
  } catch (error) {
    next(createError(404, error.message))
  }
}

export const updateById = async (req, res, next) => {
  try {
    const id = req.params.id

    const findProductAndUpdate = await ProductModel.findByIdAndUpdate({
      _id: id
    }, req.body, {
      new: true
    })
    res.send(findProductAndUpdate)
  } catch (error) {
    next(createError(404, error.message))
  }
}

export const deleteById = async (req, res, next) => {
  try {
    const id = req.params.id
    const deleteSpecificProduct = await ProductModel.deleteOne({
      _id: id
    })

    if (deleteSpecificProduct.deletedCount) {
      res.status(200).send({
        message: "one item is deleted"
      })
    }else{
      res.status(418).send({
        message: "nothing was deleted. The item does not exist !"
      })
    }
    
  } catch (error) {
    next(createError(404, error.message))
  }
}