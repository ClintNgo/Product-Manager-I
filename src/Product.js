import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Product = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>{product.Title}</p>            
            <p>{product.Price}</p>            
            <p>{product.Description}</p>
        </div>
    )
}
    
export default Product;

