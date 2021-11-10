import React, { useEffect, useState } from 'react'
import ProductForm from './Components/ProductForm.js';
import ProductList from './Components/ProductList.js';
import axios from 'axios';
// eslint-disable-next-line import/no-anonymous-default-export
const Main= (props) => {
    const [ message, setMessage ] = useState("Product Manager")
    const [ product, setProduct ] = useState([])
    // const [ loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>setProduct(res.data))
            .catch(err=>console.log('Error', err))
    })
    const removeFromDom = (id) => {
        setProduct(product.filter(product => product._id != id));
    }
    return (
        <div>
            <h2>{message}</h2>
            <ProductForm></ProductForm>
            <ProductList product={product}></ProductList>
        </div>
    )
}

export default Main;
