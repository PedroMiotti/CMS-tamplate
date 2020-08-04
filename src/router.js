
import React from 'react'

import { Switch, Route } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux'

// Components
import Navbar from './shared/components/Navbar/index'
import ProtectedRoute from './shared/components/ProtectedRoute/index'
import ProtectedAdminRoute from './shared/components/ProtectedAdminRoute/index'

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

    //_auth
    const auth = useSelector(state => state.authenticate.auth.isLoggedIn)
    //_entitie
    const usuarioPerfil = useSelector(state => state.authenticate.auth.user.perf_id);

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
                <ProtectedAdminRoute perfilId={usuarioPerfil} path='/usuario/criar' component={CriarU} /> 
                <ProtectedAdminRoute perfilId={usuarioPerfil} path='/usuario/editar/:userID' component={EditarU} /> 
                <ProtectedAdminRoute perfilId={usuarioPerfil} path='/usuario/listar' component={ListarU} /> 
                <ProtectedAdminRoute perfilId={usuarioPerfil} path='/usuario/perfil' component={Perfil} /> 

                {/* 404  */}
                <Route  path='*' component={PageNotFound} />
                
            </Switch>

        </div>
        
    )
}


export default Routes;

// ProtectedAdminRoute --> Only for logged in && admin users
// ProtectedRoute --> Only for logged in users