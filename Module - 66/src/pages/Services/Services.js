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
        content = <ClipLoader color="black" size={25} />
    }
    if(!isLoading && isError){
        console.log(error);
    }
    if(!isLoading && !isError && data.length > 0 ){
        content = <>{data.map(index => <ServiceCard key={index._id} data={index}></ServiceCard>)}</> 
    }
    return (
        <div className='my-16 mx-auto w-5/6 py-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5 '>
            {content}
        </div>
    );
};

export default Services;