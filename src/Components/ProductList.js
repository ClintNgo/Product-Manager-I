import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <h3>All Products:</h3>
            {props.product.map((product, index) => {
                return (
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>
                            {product.Title}
                        </Link>
                        <button onClick={(e) => { deleteProduct(product._id) }}>
                            Delete
                        </button>
                    </div>
                )
            }
            )}
        </>
    )
}

export default ProductList;