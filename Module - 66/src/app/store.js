import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";



export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware : (getdefaultMiddleWares) => getdefaultMiddleWares().concat(apiSlice.middleware)
})