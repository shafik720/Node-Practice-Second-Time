import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [product, setProduct] = useState({});
    const [productName, setProductName] = useState('');
    const [productImg, setProductImg] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const params = useParams();
    const { id } = params;

    // --- updating product to mongodb
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('updating : ', id) ; 
        axios.patch(`http://localhost:5000/products/update/${id}`,{productName, productImg, productPrice})
        .then(res => {
            console.log(res);
            if(res.data.modifiedCount > 0){
                console.log('Updated') ; 
                window.alert('Data updated Successfully !');
                navigate('/viewProduct');
            }
        })
        .catch(err => {
            console.log(err);
            window.alert('There was an error updating the product!');
        })
    }

    // --- deciding what to render in the image section 
    function validImg(img) {
        if (img?.toLowerCase()?.includes('.png') || img?.toLowerCase()?.includes('.jpg')) {
            // console.log('got it')
        } else {
            setProductImg("https://i.ibb.co/kMq0G6x/breakfast4.png");
        }
    }

    // --- find the single product
    useEffect(() => {
        const response = axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                setProductName(res.data.productName);
                setProductImg(res.data.productImg);
                setProductPrice(res.data.productPrice);
            })
            .catch(err => { console.log(err) })
    }, []);

    validImg(productImg)

    // let { productName, productImg, productPrice } = product;

    

    return (
        <div className='lg:w-2/3 mx-auto'>
            <div className="hero ">
                <div className="hero-content flex-col-reverse md:flex-row lg:flex-row gap-14 justify-between ">

                    {/* --- left side --- */}
                    <div className="card w-full border-4 border-gray-800 shadow-2xl  pt-4 ">
                        <figure className=''><img className=' w-4/5' src={productImg} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{productName}</h2>
                            <p className='font-bold text-2xl text-red-600 mb-8'>Price : {productPrice} </p>
                        </div>
                    </div>

                    {/* --- right side --- */}
                    <div className="card flex-shrink-0 w-full max-w-sm  ">
                        <div className="card-body ">
                            {/* <h2 className='font-bold text-2xl text-center text-slate-700 '>Add a New Product</h2> */}
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Name</span>
                                    </label>
                                    <input onChange={e => setProductName(e.target.value)} defaultValue={productName} type="text" placeholder="Product name" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productName' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Product Image Link</span>
                                    </label>
                                    <input  onChange={e => setProductImg(e.target.value)} defaultValue={productImg} type="text" placeholder="Link for the image" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productImg' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Price</span>
                                    </label>
                                    <input  onChange={e => setProductPrice(e.target.value)} defaultValue={productPrice} type="number" placeholder="Price" className="input border-2 rounded outline-none border-zinc-300 focus:border-blue-500  focus:outline-none " name='productPrice' required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update Product</button>
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