import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../Home';
import axios from 'axios';
import ProductCard from './ProductCard';

const ShowProduct = () => {
    const [productss, setProductss] = useState([]);

    useEffect(() => {
        const response = axios.get('http://localhost:5000/products')
            .then(res => {
                setProductss(res.data);
            });
    }, [])


    return (
        <div className=''>
            <h2 className='text-center mt-8 font-bold text-xl'>Total Products Found : {productss.length} </h2>

            <div className="product-div w-5/6 mx-auto mt-7 mb-14 lg:grid lg:grid-cols-3">
                {/* --- single card ---- */}
                {productss.map(index => <ProductCard key={index._id}product={index}></ProductCard>)}
            </div>
        </div>
    );
};

export default ShowProduct;