import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductContext } from '../Home';
import axios from 'axios';

const ShowProduct = () => {
    const products = useContext(ProductContext);
    const [productss, setProductss] = useState([]);

    useEffect(() => {
        const response = axios.get('http://localhost:5000/products')
            .then(res => {
                setProductss(res.data);
            });
    }, [])

    console.log(productss);

    return (
        <div>
            <h2>All Product Here {products.length} </h2>
            <h2>All Product Here {productss.length} </h2>
        </div>
    );
};

export default ShowProduct;