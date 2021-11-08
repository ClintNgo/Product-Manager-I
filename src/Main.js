import React, { useEffect, useState } from 'react'
import ProductForm from './Components/ProductForm.js';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [ message, setMessage ] = useState("Product Manager")
    return (
        <div>
            <h2>{message}</h2>
            <ProductForm></ProductForm>
        </div>
    )
}

