import React, { createContext, useEffect, useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useDispatch, useSelector } from 'react-redux';
import { useAddUserMutation } from '../../app/features/users/userApi';


export const ProductContext = createContext();

const Home = () => {
    const [user, loading] = useAuthState(auth);

    const userState = useSelector(state => state.user);
    const { userAdded } = userState;
    console.log(userAdded);
    const disptach = useDispatch();

    // --- adding a new user to mongodb
    const [addUser, { data, isLoading, isError, error }] = useAddUserMutation();

    useEffect(() => {
        if (user) {
            if (!userAdded) {
                addUser({
                    email: user.email,
                    displayName: user.displayName,
                });
            }
        }
        // console.log(user) ; 
    }, [user])
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;