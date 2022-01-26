import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

const ProductList = (props) => {

  const {products, deleteProduct} = props

  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/products')
  //     .then(res => {
  //       setProducts(res.data.products)
  //       // console.log(res.data.products);
  //       setLoaded(true);
  //       // console.log(res.data);
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  // const deleteProduct = (deleteId) => {
  //   // console.log(deleteId);
  //   axios.delete("http://localhost:8000/api/products/delete/" + deleteId)
  //     .then(res => {
  //       console.log(res.data);
  //       console.log("SUCCESS DELETE!");
  //       // remove from DOM after delete success
  //       setProducts(products.filter((product) => product._id !== deleteId))
  //     })
  //     .catch(err => console.log(err))
  // }

  // {JSON.stringify(products)}
  return (
    <div>
      {
        products ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product, i) => (
                  <tr key={i}>
                    <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>
                      <Link to={`/products/update/${product._id}`}> Edit</Link>
                      <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        ) :
          <h1> Loading...</h1>
      }
    </div >
  )
};

export default ProductList;
// return (
//   <div>
//      <PersonForm/>
//      <hr/>
//      {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
//   </div>
// );
