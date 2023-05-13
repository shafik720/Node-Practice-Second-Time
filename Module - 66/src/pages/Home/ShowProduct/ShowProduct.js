import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductContext } from '../Home';

const ShowProduct = () => {
    const products = useContext(ProductContext);
    console.log(products);
    return (
        <div>
            <h2>All Product Here</h2>
        </div>
    );
};

export default ShowProduct;