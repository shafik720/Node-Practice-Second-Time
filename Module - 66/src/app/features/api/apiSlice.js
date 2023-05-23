
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://server-second-module67.vercel.app',
    }),
    tagTypes : [],
    endpoints : (builder)=>({})
})

export default apiSlice ; 