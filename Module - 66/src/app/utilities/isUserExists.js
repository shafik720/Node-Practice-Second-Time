import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const isUserExists = () => {
    const[user, loading, error] = useAuthState();
    return (
        <div>
            
        </div>
    );
};

export default isUserExists;