import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useProduct } from '../contexts/productContext'

const Home = () => {
  const {products, fetchedProduct, deleteProduct} = useProduct()

  useEffect(() => {

    fetchedProduct()
     }, [fetchedProduct]);

     
    

  return (
    <>
    <h1>Project Management System</h1>
    <Link to={`/create`}>Add new product</Link>

    <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      

      <tbody>
        {
          products?.map((product) =>(
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>
                <Link state={product}  to={`update/${product._id}`}>Update</Link>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default Home