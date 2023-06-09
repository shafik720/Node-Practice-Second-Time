import apiSlice from "../api/apiSlice";



export const serviceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getServices: builder.query({
            query: () => '/services'
        }),

        getSingleBookingDetails: builder.query({
            query: ({ email, id }) => `/services/`
        }),

        getSingleService: builder.query({
            query: (id) => ({
                url :  `/service/${id}`,                
                headers : {
                    // --- for jwt token
                    authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
        }),

        addServiceBooking: builder.mutation({
            query: (data) => ({
                url: '/bookings/add',
                method: 'PUT',
                headers : {
                    authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // --- optimistic update
                // console.log(arg)  ; 
            }
        }),

        deleteBooking: builder.mutation({
            query: ({ email, id }) => ({
                url: `/bookings/delete`,
                method: 'PUT',
                body: { email, id }
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }){
                // --- optimistic cache update

                // console.log(arg);
                const pathResult = dispatch(apiSlice.util.updateQueryData('getUser', arg.email, (draft)=>{
                    draft.bookings = draft.bookings.filter(index=>index.service_id != arg.id);
                }));
                

                try{
                     const response = await queryFulfilled ; 
                }catch(err){
                    console.log(err) ; 
                    pathResult.undo();
                }
            }
        })
    })
})


export const { useGetServicesQuery, useAddServiceBookingMutation, useGetSingleServiceQuery, useDeleteBookingMutation } = serviceApi; 