import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [message, setMessage] = useState("Loading...")
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);

    const reloadPage = () => {
        setRefresh(!refresh)
        console.log(refresh)
    }

    return (
        <div>
            <ProductForm reloadPage={reloadPage}/>
            <hr />
            <ProductList refresh={refresh}/>
        </div>
    )

};

export default Main;
