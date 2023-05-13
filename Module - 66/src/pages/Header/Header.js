import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import productIcon from '../../assets/img/box.png';
import { ProductContext } from '../Home/Home';

const Header = () => {
    const products = useContext(ProductContext);
    return (
        <div className='text-center mt-10'>            
            <ul className="menu menu-horizontal bg-base-100 rounded-box mx-auto shadow-xl ">
                <li  className="tooltip tooltip-bottom" data-tip="Home" >
                <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </Link>
                </li>
                <li  className="tooltip tooltip-bottom" data-tip="Products" >
                    <Link  to="/viewProduct">
                    <img src={productIcon} className='h-5 w-5' alt="" />
                    </Link>
                </li>
                <li  className="tooltip tooltip-bottom" data-tip="About" >
                    <Link  to="/viewProduct">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </Link>
                </li>
            </ul>
            {/* <h2 className='mb-o mt-5'>Total Products : {products.length} </h2> */}
        </div>
    );
};

export default Header;