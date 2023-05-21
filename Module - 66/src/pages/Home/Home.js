import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useDispatch, useSelector } from 'react-redux';
import { useAddUserMutation, useGetUserQuery } from '../../app/features/users/userApi';


export const ProductContext = createContext();

const Home = () => {
    const [user, loading] = useAuthState(auth);    
    
    // --- gettting that user from mongodb
    const { data: singleUser, isLoading: singleUserLoading } = useGetUserQuery(user?.email)

    const userState = useSelector(state => state.user);
    const { userAdded } = userState;
    // console.log(userAdded);
    const disptach = useDispatch();

    // --- adding a new user to mongodb
    const [addUser, { data, isLoading, isError, error }] = useAddUserMutation();

    useEffect(() => {
        if (user) {
            if (!userAdded) {
                addUser({
                    email: user.email,
                    displayName: user.displayName,
                    role: 'user'
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