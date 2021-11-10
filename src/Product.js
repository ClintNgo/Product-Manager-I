import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Product = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div>
            <h1>{product.Title}</h1>
            <p>Price: ${product.Price}</p>
            <p>Description: {product.Description}</p>
            <Link to={`/product/edit/${id}`}>
                Edit
            </Link>
        </div>
    )
}

export default Product;

