import React from 'react';
import dummyImg from '../../assets/img/spiderman.jpg'

const BookingCard = ({data}) => {
    console.log(data);
    return (
        <div className="booking-card flex justify-between items-center border-4 w-4/6 py-2 px-3 rounded-lg border-slate-500 mt-4">
            <img src={dummyImg} className='w-20 rounded-lg' alt="" />
            <p>Booking Title</p>
            <p>Price</p>
            <div className="">
                <button className='btn btn-warning'>Pending</button>
                <button className='btn ms-3'>Delete</button>
            </div>
        </div>
    );
};

export default BookingCard;