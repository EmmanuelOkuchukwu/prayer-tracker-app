import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthService } from '../service/authService';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = AuthService.currentUserValue;
        if(!currentUser) {
            return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
        }
        return <Component {...props} />
    }} />
)