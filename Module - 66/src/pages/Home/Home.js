import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useDispatch, useSelector } from 'react-redux';
import { useAddUserMutation, useGetUserQuery } from '../../app/features/users/userApi';
import { useGetServicesQuery } from '../../app/features/services/serviceApi';
import { updateUser } from '../../app/features/users/userSlice';


export const ProductContext = createContext();

const Home = () => {
    const [user, loading] = useAuthState(auth);
    const disptach = useDispatch();

    // --- gettting that user from mongodb
    const { data: singleUser, isLoading: singleUserLoading, refetch } = useGetUserQuery(user?.email, { enabled: !user });
    if(singleUser){
        disptach(updateUser(singleUser));
    }

    const userState = useSelector(state => state.user);
    const { userAdded } = userState;
    // console.log(userState);

    // --- adding a new user to mongodb
    const [addUser, { data, isLoading, isError, error }] = useAddUserMutation();

    useEffect(() => {
        if (user) {
            refetch();
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