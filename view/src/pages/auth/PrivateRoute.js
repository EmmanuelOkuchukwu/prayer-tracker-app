import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../API/auth';

export const PrivateRoute = ({ children }) => {
    let currentUser = auth.getCurrentUser();
    let location = useLocation();

    if (!currentUser) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
};
