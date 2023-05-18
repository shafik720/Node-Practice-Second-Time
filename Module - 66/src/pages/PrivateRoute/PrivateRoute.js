import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const[user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <div>Checking Authentication</div>
    }
    if(!user){
        return <Navigate to={'/login'} state={{from : location}}></Navigate>
    }
    return children ; 
};

export default PrivateRoute;