import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const { id } = params;

    // --- adding product to mongodb
    const handleSubmit = (e) => {
        e.preventDefault();
        let productName = e.target.productName.value;
        let productImg = e.target.productImg.value;
        let productPrice = e.target.productPrice.value;
    }

    // --- find the single product
    useEffect(() => {
        const response = axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => { console.log(err) })
    }, []);

    console.log(product);

    let { productName, productImg, productPrice } = product;

    // ---
    function validImg(img) {
        if (img?.toLowerCase()?.includes('.png') || img?.toLowerCase()?.includes('.jpg')) {
            // console.log('got it')
        } else {
            productImg = "https://i.ibb.co/kMq0G6x/breakfast4.png"
        }
    }
    validImg(product?.productImg);

    return (
        <div className='lg:w-2/3 mx-auto'>
            <div className="hero ">
                <div className="hero-content flex-col-reverse md:flex-row lg:flex-row gap-14 justify-between">
                    <div className="text-center lg:text-left">
                        {/* <img alt='' src={spiderman} className="max-w-sm rounded-lg shadow-2xl" /> */}
                        <div className="card w-11/12 border-4 border-gray-800 shadow-2xl  pt-4 ">
                            <figure className=''><img className='w-4/5' src={productImg} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{productName}</h2>
                                <p>How to park your car at your garage ?</p>
                                {/* <div className="card-actions  justify-end flex flex-row">
                                    <button onClick={() => editProduct(_id)} className="btn btn-sm btn-primary">Edit Product</button>
                                    <button onClick={() => handleDelete(_id)} className="btn btn-sm ">Delete Product</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  ">
                        <div className="card-body ">
                            {/* <h2 className='font-bold text-2xl text-center text-slate-700 '>Add a New Product</h2> */}
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Name</span>
                                    </label>
                                    <input defaultValue={productName} type="text" placeholder="Product name" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productName' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Image Link</span>
                                    </label>
                                    <input defaultValue={productImg} type="text" placeholder="Link for the image" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productImg' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Price</span>
                                    </label>
                                    <input defaultValue={productPrice} type="number" placeholder="Price" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productPrice' required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;