import apiSlice from "../api/apiSlice";



export const userApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        addUser : builder.mutation({
            query : (data)=> ({
                url : '/addUser',
                method : 'PUT',
                body : data
            })
        })
    })
})


export const {useAddUserMutation} = userApi ; 