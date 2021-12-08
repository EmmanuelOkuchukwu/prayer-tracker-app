import React from 'react';
import auth from '../../API/auth';
import { Navigate } from 'react-router-dom';

function Register() {
    if(auth.getCurrentUser()) {
        return <Navigate to={{ pathname: '/dashboard' }} />
    }
    return <h1>Register</h1>
}

export default Register;