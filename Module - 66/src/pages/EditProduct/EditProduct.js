import React from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const params = useParams();
    const { id } = params;

    // --- adding product to mongodb
    const handleSubmit = (e) => {
        e.preventDefault();
        let productName = e.target.productName.value;
        let productImg = e.target.productImg.value;
        let productPrice = e.target.productPrice.value;

        
    }
    return (
        <div className='lg:w-2/3 mx-auto'>
            <div className="hero ">
                <div className="hero-content flex-col-reverse md:flex-row lg:flex-row gap-14 justify-between">
                    <div className="text-center lg:text-left">
                        {/* <img alt='' src={spiderman} className="max-w-sm rounded-lg shadow-2xl" /> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  ">
                        <div className="card-body ">
                            {/* <h2 className='font-bold text-2xl text-center text-slate-700 '>Add a New Product</h2> */}
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Product name" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productName' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Image Link</span>
                                    </label>
                                    <input type="text" placeholder="Link for the image" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productImg' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Price</span>
                                    </label>
                                    <input type="number" placeholder="Price" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productPrice' required />
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