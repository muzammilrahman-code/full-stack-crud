import axios from "axios"

const API_URI = "http://localhost:3000/api/v1/crud";
const allProductsServices = async() =>{
   const res = await axios.get(`${API_URI}`)
   return res;
}

const singleProductsServices = async(id) =>{
   const res =  await axios.get(`${API_URI}/${id}`)
   return res;
}

const addProductsServices = async(data) =>{
   const res =  await axios.post(`${API_URI}`, data)
   return res;
}

const updateProductsServices = async(id, data) =>{
   const res =  await axios.put(`${API_URI}/${id}`, data)
   return res;
}

const deleteProductsServices = async(id) =>{
   const res =  await axios.delete(`${API_URI}/${id}`)
   return res;
}

export {
    allProductsServices,
    singleProductsServices,
    addProductsServices,
    updateProductsServices,
    deleteProductsServices
}