import React from "react";
import {Link} from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
const ProductList= (props) =>{
    return(
        <div>
            <h3>All Products:</h3>
            {props.product.map((product, index)=>
                <Link key={index} to={`/product/${product._id}`}>
                    {product.Title} 
                </Link>
                )}
        </div>
    )
}

export default ProductList;