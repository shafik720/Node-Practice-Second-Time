import React from 'react';

const ServiceCard = ({data}) => {    
    // console.log(data); 
    const{_id, price, img, title} = data ; 
    return (
        <div className="border-4">
                <img src={img} className='w-full' alt="" />
                <h2 className='font-bold text-xl my-4 px-3'>{title} </h2>
                
                <div className=" mt-5 flex justify-between items-center  rounded-md py-3 mx-3">
                    <h2 className='m-0 font-bold text-2xl'>${price}</h2>
                    <button className='btn '>Book Service</button>
                </div>
            </div>
    );
};

export default ServiceCard;