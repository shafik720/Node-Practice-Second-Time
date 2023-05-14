import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    let { productImg, productName, _id, productPrice } = product;
    // console.log(productImg) ;
    function validImg(img) {
        if (img.toLowerCase().includes('.png') || img.toLowerCase().includes('.jpg')) {
            // console.log('got it')
        } else {
            productImg = "https://i.ibb.co/kMq0G6x/breakfast4.png"
        }
    }
    validImg(productImg);

    // --- deleting a product
    const handleDelete = (id) => {
        const isDelete = window.confirm('You sure you want to delete this item ?');
        if (isDelete) {
            axios.delete(`http://localhost:5000/products/delete/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        window.alert('Product deleted Successfully !');
                    }else{
                        window.alert('There was an error deleting the product !');
                    }
                })
                .catch(err => {
                    window.alert(err.message);
                })
        }
    }
    // --- taking user to edit product page
    const navigate = useNavigate();
    const editProduct = (id) => {
        navigate(`/editProduct/${id}`)
    }
    return (
        <div className="card w-11/12 border-4 border-gray-800 shadow-2xl  pt-4 ">
            <figure className=''><img className='w-4/5' src={productImg} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>How to park your car at your garage ?</p>
                <div className="card-actions  justify-end flex flex-row">
                    <button onClick={()=>editProduct(_id)} className="btn btn-sm btn-primary">Edit Product</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm ">Delete Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;