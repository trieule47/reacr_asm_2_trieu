import React from 'react';
import { Redirect, Navigate, Route } from 'react-router-dom';

const checkToken = () =>{
    return true
} 

function AuthRoute({ componet: Component, ...rest }){
    <Route
        {...rest}
        render={props =>
            ( checkToken() == null) ? (
                <Component {...props} />
            ) : (
                <Navigate to={{
                    pathname: './',
                    state: { from: props.location },
                }}
                />
            )
        }
    />
}

export default AuthRoute;
