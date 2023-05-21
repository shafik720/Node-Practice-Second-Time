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
        addBookings : builder.mutation({
            query : ({email, bookingDetails}) =>({
                url : '/user/addBooking',
                method : 'PATCH',
                body : {email, bookingDetails}
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    console.log('Sending data : ',arg)
                    const bookingAdded = await queryFulfilled;
                    console.log('Response from Server : ',bookingAdded)
                    // if (userAdded.data.acknowledged) {
                    //     dispatch(addedUser(true))
                    // }
                    
                } catch (err) {
                    console.log(err)
                }
            }
        })
    })
})


export const { useAddUserMutation } = userApi; 