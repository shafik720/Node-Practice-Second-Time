import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import productIcon from '../../assets/img/box.png';
import { ProductContext } from '../Home/Home';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useDispatch, useSelector } from 'react-redux';
import { addedUser } from '../../app/features/users/userSlice';

const Header = () => {
    const products = useContext(ProductContext);

    // --- checking if user is logged in
    const [user] = useAuthState(auth);

    // --- change redux state when user logged out
    const dispatch = useDispatch();

    // --- getting user state
    let counter = null; 
    const userStates = useSelector(state => state.user);
    const{user: userInStates} = userStates; 
    console.log(userInStates?.bookings?.length);
    if(userInStates?.bookings?.length > 0){
        counter = userInStates.bookings.length;
    }
 
    // --- logout user
    const [signOut, loading, error] = useSignOut(auth);
    const handleLogout = (e) => {
        e.preventDefault();
        let isConfirm = window.confirm("Log Out ? ")
        if (isConfirm) {
            signOut();
            dispatch(addedUser(false));
        }
    }

    return (
        <div className='text-center mt-10'>
            <ul className="menu menu-horizontal bg-base-100 rounded-box mx-auto shadow-xl ">
                <li className="tooltip tooltip-bottom " data-tip="Home" >
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Home
                    </Link>
                </li>
                <li className="tooltip tooltip-bottom" data-tip="Products" >
                    <Link to="/viewProduct">
                        <img src={productIcon} className='h-5 w-5' alt="" />
                        Products
                    </Link>
                </li>
                <li className="tooltip tooltip-bottom" data-tip="Products" >
                    <Link to="/bookings">
                        <img src="https://i.ibb.co/JmVZ2Qk/car-repair.png" className='h-5 w-5' alt="" />
                        Bookings <span className='border-2 border-red-600 w-6 h-6  flex justify-center items-center rounded-full ps-0'>{counter}</span>
                    </Link>
                </li>
                <li className="tooltip tooltip-bottom" >
                    {user ?
                        <a href="" onClick={handleLogout}> <img src="https://i.ibb.co/DbsKJ2g/user-3.png" className='h-5 w-5' alt="" /> Logout</a> : <Link to="/login">
                            <img src="https://i.ibb.co/DbsKJ2g/user-3.png" className='h-5 w-5' alt="" />
                            Login
                        </Link>
                    }
                </li>
            </ul>
            {/* <h2 className='mb-o mt-5'>Total Products : {products.length} </h2> */}
        </div>
    );
};

export default Header;