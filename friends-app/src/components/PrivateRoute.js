import React from 'react';
import { Route, Redirect } from 'react-router-dom';


//Requirements:
// 1 - same API as <Route />. (same props as route)
// 2 - it renders a <Route /> and passes all the props through to it.
// 3 -  Check if the user in authenticated. If they are it renders the "component" prop.
// if not it redirects the user to /login

const PrivateRoute = ({ component: Component, ...rest}) => {

    console.log({...rest})
    return (
        <Route 
            {...rest}
            render={() =>  localStorage.getItem('token') ? <Component /> : <Redirect to="/login" />
            }
        />
    )
}

export default PrivateRoute;