import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import auth from "../../API/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = auth.getCurrentUser();
        if(!currentUser) {
            return (<Navigate to={{ pathname: "/", state: { from: props.location } }} />)
        }
        return <Component {...props} />
    }} />
);