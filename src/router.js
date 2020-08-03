
import React, { useState, useEffect } from 'react'

import { Switch, Route } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import Navbar from './shared/components/Navbar/index'
import ProtectedRoute from './shared/components/ProtectedRoute/index'

// Pages 
    //Login
        import LoginForm from './pages/login/loginForm'
        import Login from './pages/login/login'
    // Home
        import Dashboard from './pages/dashboard/index'
    // Usuario
        import ListarU from './pages/usuario/listar/index'
        import CriarU from './pages/usuario/criar/index'
        import EditarU from './pages/usuario/editar/index'
        import Perfil from './pages/usuario/perfil/index'
    // 404
    import PageNotFound from './pages/404/index'



const Routes = () => {

    const auth = useSelector(state => state.authenticate.auth.isLoggedIn)


    return(
        
        <div >

            {auth && <Navbar />}

            <Switch >
                {/* No auth  */}
                {!auth ? <Route exact path='/' component={Login}/> : null }
                {!auth ? <Route path="/login" component={LoginForm} /> : null}

                {/* auth  */}
                <ProtectedRoute  path='/home' component={Dashboard} /> 
                {/* Usuario  */}
                <ProtectedRoute  path='/usuario/criar' component={CriarU} /> 
                <ProtectedRoute  path='/usuario/editar/:userID' component={EditarU} /> 
                <ProtectedRoute  path='/usuario/listar' component={ListarU} /> 
                <ProtectedRoute  path='/usuario/perfil' component={Perfil} /> 

                {/* 404  */}
                <Route  path='*' component={PageNotFound} />
                
            </Switch>

        </div>
        
    )
}


export default Routes;
