import React from 'react';
import { Redirect, Navigate, Route } from 'react-router-dom';

const checkToken = () =>{
    return true
} 

const PrivateRoute = ({ componet: Component, ...rest }) => {
    <Route
        {...rest}
        render={props =>
            (checkToken() != null) ? (
                <Component {...props} />
            ) : (
                <Navigate to={{
                    pathname: './login',
                    state: { from: props.location },
                }}
                />
            )
        }
    />
};

export default PrivateRoute;
