import {Product} from "../model/product.model.mjs"
import asyncHandler from 'express-async-handler'

const getProduct = asyncHandler(async(req, res) =>{
   const products = await Product.find()
   res.status(200).json({ products })
})

const getSingleProduct = asyncHandler(async(req, res) =>{
   const product = await Product.findById(req.params.id)
   if(!product){
    res.status(404)
    throw new Error("product not found")
   }
   res.status(200).json({
    product
   })
})

const addProduct = asyncHandler(async(req, res) =>{
   const {productName, price} = req.body;

   if(!productName || !price){
    res.status(404)
    throw new Error("Input all fields")
   }

   const product = await Product.findOne({ productName })
   if(product){
    res.status(409)
    throw new Error("product already added")
   }

   const newProduct  =await Product.create({
    productName, price
   })

   res.status(201).json({
    message: `new Product Added`,
    product: newProduct
   })
})

const updateProduct = asyncHandler(async(req, res) =>{
   const {productName, price} = req.body
   const product = await Product.findById(req.params.id)
   if(!product){
    res.status(404)
    throw new Error("product not found")
   }

   product.productName = productName || product.productName
   product.price = price || product.price

   await product.save()
   res.status(200).json({
      message: `product updated successfully`,
      product
   })
})

const deleteProduct = asyncHandler(async(req, res) =>{
   const product = await Product.findById(req.params.id)
   if(!product){
    res.status(404)
    throw new Error("product not found")
   }

   await Product.findByIdAndDelete(req.params.id)
   res.status(200).json({
      message: `product deleted successfully`
   })
})

export {
    getProduct,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
}