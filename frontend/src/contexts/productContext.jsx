import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    allProductsServices,
    singleProductsServices,
    addProductsServices,
    updateProductsServices,
    deleteProductsServices
  } from '../services/productService'

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  
    // allProductsServices().then((res) => console.log(res)
    // )
    // axios
    //   .get(API_URI)
    //   .then((res) => {
    //     console.log("Fetched products:", res.data.products);
    //     setProducts(res.data.products);
    //   })
    //   .catch((err) => {
    //     console.error("Error fetching products:", err); 
    //   });
 

  const fetchedProduct = async() =>{
    try{
         const {data} = await allProductsServices()
         setProducts(data.products)
    }
    catch(err){
      console.log(err);
      
    }
  }

  const getSingleProduct = async(id) => {
    try {
      const {data} = await singleProductsServices(id);
      return data;
    } catch (error) {
      console.log(error);
      
    }
  }

  
  const addProduct = async(newProduct) => {
    try {
      const {data} = await addProductsServices(newProduct);
      
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  
  const updatedProduct = async(id, updatedProduct) => {
    try {
      const {data} = await updateProductsServices(id, updatedProduct)
      return data
    } catch (error) {
      console.log(error);
    }
  }
  
  const deleteProduct = async(id) => {
     try {
      const confirm = window.confirm("Are you sure?")
    if(confirm){
      const {data} = await deleteProductsServices(id)
      setProducts(products.filter((product) => product._id !== id))
      return data
    }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductContext.Provider value={{ products, setProducts, getSingleProduct, addProduct, updatedProduct, deleteProduct, fetchedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
