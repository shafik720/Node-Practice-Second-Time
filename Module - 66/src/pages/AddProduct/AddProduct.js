import React from 'react';
import spiderman from '../../assets/img/spiderman.jpg';

const AddProduct = () => {
    return (
        <div className='lg:w-2/3 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col-reverse md:flex-col-reverse lg:flex-row gap-14 justify-between">
                    <div className="text-center lg:text-left">
                        <img src={spiderman} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-slate-500 shadow-black bg-base-100 ">
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Product Name</span>
                                </label>
                                <input type="text" placeholder="Product name" className="input border-2 rounded outline-none border-zinc-300" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Product Image Link</span>
                                </label>
                                <input type="text" placeholder="password" className="input border-2 rounded outline-none border-zinc-300" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="number" placeholder="Price" className="input border-2 rounded outline-none border-zinc-300" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;