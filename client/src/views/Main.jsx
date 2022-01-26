import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [message, setMessage] = useState("Loading...")
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products)
                // console.log(res.data.products);
                setLoaded(true);
                // console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8000/api/products/delete/" + deleteId)
          .then(res => {
            console.log(res.data);
            console.log("SUCCESS DELETE!");
            // remove from DOM after delete success
            setProducts(products.filter((product) => product._id !== deleteId))
          })
          .catch(err => console.log(err))
      }

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);



    return (
        <div>
            <ProductForm products={products} />
            <hr />
            <ProductList products={products} deleteProduct={deleteProduct} />
        </div>
    )

};

export default Main;
