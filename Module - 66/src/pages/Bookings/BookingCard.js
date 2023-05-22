import React from 'react';
import dummyImg from '../../assets/img/spiderman.jpg'
import { useDeleteBookingMutation, useGetSingleServiceQuery } from '../../app/features/services/serviceApi';
import { ClipLoader } from 'react-spinners';

const BookingCard = ({ data }) => {
    const { service_id, id } = data;

    // --- deleting a booking         
    const [deleteBooking, {isLoading : deleteLoading, isError : isDeleteError, error : deleteError}] = useDeleteBookingMutation();

    const { data: service, isLoading, isError, error, isSuccess } = useGetSingleServiceQuery(service_id, {skip : !data});

    const handleDelete = (deletedId) => {
        deleteBooking(deletedId);
    }

    let content = null;
    if (isLoading && !isError) {
        // content = <div className="w-full mx-auto mt-40 shrink text-center"><ClipLoader className='text-center' color="black" size={55} /></div>
    }
    if (!isLoading && isError) {
        console.log(error);
        content = <div className="w-full mx-auto mt-40 shrink text-center"><h2 className='text-5xl font-semibold text-red-700'>{error.error}</h2></div>
    }

    if (!isLoading && !isError && isSuccess && service) {
        const {price, title, service_id, img} = service ;   

        content = <div key={service_id} className="booking-card flex justify-between items-center border-4 w-4/6 py-2 px-3 rounded-lg border-slate-500 mt-4 ">
            <img src={img} className='w-20 rounded-lg' alt="" />
            <p>{title}</p>
            <p>{price}</p>
            <div className="">
                <button className='btn btn-warning'>Pending</button>
                <button onClick={()=>handleDelete(service_id)} className='btn ms-3'>Delete</button>
            </div>
        </div>
    }

    return (
        content
    );
};

export default BookingCard;