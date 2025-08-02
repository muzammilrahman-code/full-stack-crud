import react, { useState } from 'react'
import { useProduct } from '../contexts/productContext'
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate() 

  const {addProduct} = useProduct()

  const [product, setProduct] = useState({
    productName: "",
    price: ""
  })

  const handleChange = (e) =>{
    setProduct({...product, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const res = await addProduct(product)
    setProduct(res.product)
    navigate("/")
  }
  
  

  return (
   <>
    <h1>Add New Product</h1>
    <form onSubmit={handleSubmit} className='form'>
      <div >
        <input className='form-control' type="text" name='productName' id='productName' placeholder='Enter product Name' onChange={handleChange} value={product.productName}/>
      </div>

      <div>
        <input className='form-control' type="number" name='price' id='price' placeholder='Enter Price' onChange={handleChange} value={product.price}/>
      </div>

      <div>
        <input className='form-control' type="submit" value='Click to Add Product' />
      </div>
    </form>
    </>
  )
}

export default Create