import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useAddServiceBookingMutation } from '../../app/features/services/serviceApi';

import { ClipLoader } from 'react-spinners';
import { useAddBookingsMutation, useGetUserQuery } from '../../app/features/users/userApi';

const ServiceCard = ({ data }) => {
    
    const { _id, price, img, title, service_id } = data;
    const[isBooked, setIsBooked] = useState(false);

    // --- getting user info from firebase using firebase useAuth Hook
    const [user, loading, error] = useAuthState(auth);
    
    // --- getting user info from mongodb using Redux Toolkit Query 
    const {data : singleUser, isLoading : userLoading, isError : userIsError, error : userError} = useGetUserQuery(user.email);
    useEffect(()=> {
        let bookingDone = singleUser?.bookings?.find(index=>index.service_id === service_id)
        if(bookingDone){
            setIsBooked(true);
        }
    },[user, singleUser])
    // console.log(singleUser?.bookings);

    // --- adding booking data through rtk query
    const[addBookings, {data : bookedDone, isLoading, isError, error : bookingError, isSuccess}]     = useAddBookingsMutation();


    // --- add a booking to database
    const handleBooking = (id) => {
        addBookings({
            email : user.email,
            bookingDetails : {
                service_id ,
                id
            }
        });
    }

    
    // let custiomizedBookingBtn = <button className='btn btn-info' onClick={() => handleBooking(_id)}>{isBooked ? 'Booked' : 'Book Service'}</button>
    let loader = null ; 
    let customClassbtn = 'btn btn-primary';
    let buttonText = 'Book Now' ; 
    if(isLoading && !isError){
        console.log('Booking is going on');
        customClassbtn = 'btn btn-warning';
        buttonText = 'Booking' ; 
        loader = <ClipLoader className='me-2' color="white" size={25} />
    }
    if(!isLoading && isError){
        console.log('There was an error : ', bookingError)
    }
    if(isBooked){
        customClassbtn = 'btn btn-success';
        buttonText = 'Booked' ; 
    }
    useEffect(()=>{
    
    if(!isLoading && !isError && isSuccess){
        setIsBooked(true);
    }
    },[isLoading, isError, isSuccess ])
    return (
        <div className="border-4 flex flex-col justify-between">
            <div className="">
                <img src={img} className='w-full' alt="" />
            </div>
            <h2 className='font-bold text-xl my-4 px-3'>{title} </h2>

            <div className=" mt-5 flex justify-between items-center  rounded-md py-3 mx-3">
                <h2 className='m-0 font-bold text-2xl'>${price}</h2>
                <button className={customClassbtn } onClick={() => handleBooking(_id)}> {loader} {buttonText}</button>
            </div>
        </div>
    );
};

export default ServiceCard;