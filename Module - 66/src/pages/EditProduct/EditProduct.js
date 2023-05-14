import React from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const params = useParams();
    const{id} = params ; 
    return (
        <div>
            <h2>Edit Product here : {id} </h2>
        </div>
    );
};

export default EditProduct;