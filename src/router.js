
import React, { useState, useEffect } from 'react'

import { Switch, Route } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import Navbar from './shared/components/Navbar/index'
import ProtectedRoute from './shared/components/ProtectedRoute/index'

// Pages 
import Dashboard from './pages/dashboard/index'
import Login from './pages/login/login'
import LoginForm from './pages/login/loginForm'



const Routes = () => {

    const auth = useSelector(state => state.authenticate.auth.isLoggedIn)

    return(
        
        <div>
            {auth && <Navbar />}
                 
            <Switch >
                {/* No auth  */}
                {!auth ? <Route exact path='/'  component={Login}/> : null }
                {!auth ? <Route path="/login" component={LoginForm} /> : null}

                {/* auth  */}
                <ProtectedRoute  path='/home'  component={Dashboard} /> 

                <Route  path='*' component={() => "404 NOT FOUND"} />
            </Switch>

        </div>
        
    )
}


export default Routes;
