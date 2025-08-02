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








// import { useEffect, useState } from 'react'
// import { useLocation, useNavigate, Link } from 'react-router-dom'
// import { useProduct } from '../contexts/productContext'

// const Update = () => {
//   const { updatedProduct } = useProduct();
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   // Redirect if no state (e.g. user refreshed or opened URL directly)
//   useEffect(() => {
//     if (!state) {
//       navigate('/');
//     }
//   }, [state, navigate]);

//   const [product, setProduct] = useState({
//     productName: state?.productName || "",
//     price: state?.price || ""
//   });

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await updatedProduct(state._id, product);
//       navigate('/');
//     } catch (error) {
//       console.error("Update failed", error);
//     }
//   };

//   return (
//     <>
//       <h1>Update Product</h1>
//       <Link to="/">All Products</Link>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input type="text" name="productName" value={product.productName} onChange={handleChange} />
//         </div>
//         <div>
//           <input type="number" name="price" value={product.price} onChange={handleChange} />
//         </div>
//         <div>
//           <input type="submit" value="Click to update Product" />
//         </div>
//       </form>
//     </>
//   );
// };

// export default Update;
