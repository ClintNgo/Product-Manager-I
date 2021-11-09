import React, { useState } from 'react'
import axios from 'axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', {
            Title,
            Price,
            Description,
        })
            .then(res=>console.log('response',res))
            .catch(err=>console.log('Error',err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
            </p>
            <input type="submit" value='Create'/>
        </form>
    )
}

