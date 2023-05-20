import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import userReducer from './features/users/userSlice'


export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        user : userReducer ,
    },
    middleware : (getdefaultMiddleWares) => getdefaultMiddleWares().concat(apiSlice.middleware)
})