import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({children}) => {
    const[user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <div>Checking Authentication</div>
    }
    if(!user){
        toast.success('Login first to see this page', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return <Navigate to={'/login'} state={{from : location}}></Navigate>
    }
    return children ; 
};

export default PrivateRoute;