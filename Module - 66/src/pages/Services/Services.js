import React from 'react';

const Services = () => {
    return (
        <div className='my-16 mx-auto w-5/6 py-5 grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 '>
            <div className="border-4 hover:shadow-lg">
                <img src="https://i.ibb.co/T2cpBd5/888.jpg" className='w-full' alt="" />
                <h2 className='font-bold text-xl my-4 px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
                
                <div className=" mt-5 flex justify-between items-center  rounded-md py-3 mx-3">
                    <h2 className='m-0 font-bold text-2xl'>$45</h2>
                    <button className='btn '>Book Service</button>
                </div>
            </div>
        </div>
    );
};

export default Services;