import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState('');
    const [Description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDescription(res.data.Description);
            })
    }, []);


    const updatePerson = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/edit/' + id, {
            Title,
            Price,
            Description,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" value={Title}
                        onChange={(e) => { setTitle(e.target.value) }} ></input>
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" value={Price}
                        onChange={(e) => { setPrice(e.target.value) }} ></input>
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" value={Description}
                        onChange={(e) => { setDescription(e.target.value) }} ></input>
                </p>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update;

