import apiSlice from "../api/apiSlice";



export const serviceApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({

        getServices : builder.query ({
            query : () => '/services'
        }),
        
        getSingleBookingDetails : builder.query({
            query : ({email, id}) => `/services/`
        }),

        getSingleService : builder.query({
            query : (id)=> `/service/${id}`
        }),

        addServiceBooking : builder.mutation({
            query : (data)  => ({
                url : '/bookings/add',
                method : 'PUT',
                body : data,
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                // --- optimistic update
                // console.log(arg)  ; 
            }
        })
    })
})


export const {useGetServicesQuery, useAddServiceBookingMutation , useGetSingleServiceQuery} = serviceApi ; 