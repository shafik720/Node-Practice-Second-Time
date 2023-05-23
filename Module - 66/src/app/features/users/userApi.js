import apiSlice from "../api/apiSlice";
import { addedUser } from "./userSlice";
// import 


export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (data) => ({
                url: '/addUser',
                method: 'PUT',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const userAdded = await queryFulfilled;
                    // console.log(userAdded)
                    if (userAdded.data.acknowledged) {
                        dispatch(addedUser(true))
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        }),  
        getUser : builder.query({
            query : (email)=> ({
                url : `/users/${email}`,
                method : 'GET',                
            })
        }),
        addBookings : builder.mutation({
            query : ({email, bookingDetails}) =>({
                url : '/user/addBooking',
                method : 'PUT',
                headers : {
                    authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body : {email, bookingDetails}
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    
                    const bookingAdded = await queryFulfilled;
                    
                    if (bookingAdded) {
                        const pathResult = dispatch(apiSlice.util.updateQueryData('getUser', arg.email, (draft)=>{
                            draft?.bookings?.push(arg.bookingDetails);
                        }))
                    }
                    
                } catch (err) {
                    console.log(err)
                }
            }
        })
    })
})


export const { useAddUserMutation, useAddBookingsMutation, useGetUserQuery } = userApi; 