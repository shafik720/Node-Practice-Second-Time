import apiSlice from "../api/apiSlice";



export const serviceApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getServices : builder.query ({
            query : () => '/services'
        }),
    })
})


export const {useGetServicesQuery} = serviceApi ; 