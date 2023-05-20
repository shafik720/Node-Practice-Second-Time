import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useAddServiceBookingMutation } from '../../app/features/services/serviceApi';
import axios from 'axios';

const ServiceCard = ({ data }) => {
    
    const { _id, price, img, title } = data;

    // --- getting user info
    const [user, loading, error] = useAuthState(auth);
    const {reloadUserInfo} = user ; 

    // --- adding booking data through rtk query
    const[addServiceBooking, {isLoading, isError, error : bookingError}]     = useAddServiceBookingMutation();

    // --- add a booking to database
    const handleBooking = (id) => {
        addServiceBooking({
            user : reloadUserInfo,
            bookingServiceDetails : [data],
            status : 'pending',
            email : user.email 
        })


        // const response = axios.put('http://localhost:5000/bookings/add', {reloadUserInfo}).then(res => console.log(res))
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