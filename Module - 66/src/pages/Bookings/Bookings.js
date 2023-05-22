import React, { useEffect } from 'react';
import { useGetUserQuery } from '../../app/features/users/userApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ClipLoader } from 'react-spinners';
import BookingCard from './BookingCard';

const Bookings = () => {
    const [user] = useAuthState(auth);
    
    const{data, isLoading, isError,isSuccess, error} = useGetUserQuery(user?.email,{skip : !user});
    
    let content = null ; 

    if(isLoading && !isError){
        content = <div className="w-full mx-auto mt-40 shrink text-center"><ClipLoader className='text-center' color="black" size={55} /></div>
    }
    if(!isLoading && isError){
        console.log(error);
        content = <div className="w-full mx-auto mt-40 shrink text-center"><h2 className='text-5xl font-semibold text-red-700'>{error.error}</h2></div>
    }

    if(!isLoading && !isError && isSuccess && data?.bookings.length > 0 ){
        
        content = <>{data.bookings.map(index => <BookingCard key={index.service_id} data={index}></BookingCard>)}</> 
    }


    return (
        <div className='my-16  w-5/6 mx-auto flex flex-col justify-center items-center '>
            {content}
            {/* <BookingCard></BookingCard> */}
        </div>
    );
};

export default Bookings;