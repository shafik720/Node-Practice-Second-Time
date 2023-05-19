import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { useGetServicesQuery } from '../../app/features/services/serviceApi';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Services = () => {    

    // --- getting mongodb data with Redux Toolkit Query
    const{data, isLoading, isError, error, isSuccess} = useGetServicesQuery();
    let content = null ; 

    if(isLoading && !isError){
        content = <div className="w-full mx-auto mt-40 shrink text-center"><ClipLoader className='text-center' color="black" size={55} /></div>
    }
    if(!isLoading && isError){
        console.log(error);
        content = <div className="w-full mx-auto mt-40 shrink text-center"><h2 className='text-5xl font-semibold text-red-700'>{error.error}</h2></div>
    }
    if(!isLoading && !isError && data.length > 0 ){
        content = <>{data.map(index => <ServiceCard key={index._id} data={index}></ServiceCard>)}</> 
    }
    return (
        <div className={ (isLoading || isError) ? '' : `my-16 mx-auto w-5/6 py-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5 ` } >
            {content}
        </div>
    );
};

export default Services;