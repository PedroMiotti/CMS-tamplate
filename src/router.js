
import React, { useState} from 'react'

import { Switch, Route } from 'react-router-dom';


// Components
import Navbar from './shared/components/Navbar/index'

// Pages 
import Dashboard from './pages/dashboard/index'
import Login from './pages/login/login'
import LoginForm from './pages/login/loginForm'



const Routes = () => {

    return(
        
        <div>
            
            
            <Navbar />
                 
            
            <Switch >
                {/* No auth  */}
                <Route exact path='/'  component={Login} />
                <Route path="/login" component={LoginForm} />

                {/* auth  */}
                <Route path='/home'  component={Dashboard} /> 

                <Route  path='*' component={() => "404 NOT FOUND"} />
            </Switch>

        </div>
        
    )
}


export default Routes;
