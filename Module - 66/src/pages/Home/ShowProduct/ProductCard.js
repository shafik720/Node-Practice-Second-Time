import React from 'react';

const ProductCard = ({product}) => {
    let{productImg, productName, _id, productPrice} = product ;
    // console.log(productImg) ;
    function validImg(img){
        if(img.toLowerCase().includes('.png') || img.toLowerCase().includes('.jpg')){
            // console.log('got it')
        }else{
            productImg = "https://i.ibb.co/kMq0G6x/breakfast4.png"
        }
    }
    validImg(productImg);
    return (
        <div className="card w-11/12 border-4 border-gray-800 shadow-2xl  pt-4 ">
            <figure className=''><img className='w-4/5' src={productImg} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>How to park your car at your garage ?</p>
                <div className="card-actions  justify-end flex flex-row">                    
                    <button className="btn btn-sm btn-primary">Edit Product</button>
                    <button className="btn btn-sm ">Delete Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;