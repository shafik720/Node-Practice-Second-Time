import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const[service, setService] = useState([]) ; 
    useEffect(()=>{
        const data = axios.get('services.json').then(res => setService(res.data));
    },[])

    return (
        <div className='my-16 mx-auto w-5/6 py-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5 '>
            {service.map(index => <ServiceCard key={index._id} data={index}></ServiceCard>)}
        </div>
    );
};

export default Services;