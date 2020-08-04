import React from 'react';

//Route
import { Route, Redirect } from 'react-router-dom';



const ProtectedAdminRoute = ({component: Component,perfilId ,...rest }) => (

    <Route {...rest} render={props => (
        (localStorage.getItem('jwt') && perfilId === 1)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )} />
)

export default ProtectedAdminRoute;