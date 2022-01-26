import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data.product)
                console.log(res.data.product)
            })
            .catch(err => console.error(err));
    }, [id]);

    // {JSON.stringify(product)}
    return (
        <div>
            <Link to={"/products/update/" + product._id}>Edit Product</Link>
            <h1>Product</h1>
            <fieldset>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </fieldset>
        </div>
    )
}

export default Detail;

