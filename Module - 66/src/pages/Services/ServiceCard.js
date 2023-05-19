import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ServiceCard = ({ data }) => {
    // console.log(data); 
    const { _id, price, img, title } = data;

    // --- getting user info
    const [user, loading, error] = useAuthState(auth);
    

    // --- booking functionality
    const handleBooking = (id) => {
        console.log(id);

    }
    return (
        <div className="border-4 flex flex-col justify-between">
            <div className="">
                <img src={img} className='w-full' alt="" />
            </div>
            <h2 className='font-bold text-xl my-4 px-3'>{title} </h2>

            <div className=" mt-5 flex justify-between items-center  rounded-md py-3 mx-3">
                <h2 className='m-0 font-bold text-2xl'>${price}</h2>
                <button className='btn btn-info' onClick={() => handleBooking(_id)}>Book Service</button>
            </div>
        </div>
    );
};

export default ServiceCard;