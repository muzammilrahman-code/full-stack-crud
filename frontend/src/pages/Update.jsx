import React, { useState } from 'react'
import { useProduct } from '../contexts/productContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const {updatedProduct} = useProduct()
  const {state} = useLocation()
  const {_id, productName, price} = state

  const [product, setProduct] = useState({
    productName,
    price
  })

  const handleChange = (e) =>{
    setProduct({...product, [e.target.name]: e.target.value})
  }

    const navigate = useNavigate();


  const handleSubmit =async (e) =>{
    e.preventDefault()
    const res = await updatedProduct(_id, product)
    setProduct(res.data)
    navigate("/")
  }
  return (
    <>
    <h1>Update Product</h1>

  <Link to={'/'}>All Products</Link>
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input className='form-control' type="text" name='productName' id='productName' onChange={handleChange} value={product.productName} />
      </div>

       <div>
        <input className='form-control' type="number" name='price' id='price' placeholder='Enter Price' onChange={handleChange} value={product.price}/>
      </div>

       <div>
        <input className='form-control' type="submit" value='Click to update Product' />
    </div>
    </form>
    
    </>
  )
}

export default Update


