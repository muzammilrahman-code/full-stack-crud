import express from "express"
import {
    getProduct,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
} from '../controller/product.controller.mjs'

const router = express.Router()

router.route('/')
  .get(getProduct)
  .post(addProduct)

router.route('/:id')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct)

export default router