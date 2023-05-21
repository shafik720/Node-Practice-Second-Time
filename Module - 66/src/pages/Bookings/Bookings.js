import React from 'react';
import dummyImg from '../../assets/img/spiderman.jpg'

const Bookings = () => {
    return (
        <div className='my-16  w-5/6 mx-auto flex flex-col justify-center items-center'>
            <div className="booking-card flex justify-between items-center border-4 w-4/6 py-2 px-4 rounded-lg border-slate-500">
                <img src={dummyImg} className='w-20 rounded-lg' alt="" />
                <p>Booking Title</p>
                <p>Price</p>
                <div className="">
                    <button className='btn btn-warning'>Pending</button>
                    <button className='btn ms-3'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Bookings;