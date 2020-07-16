
import React from 'react'

// Style
import './styles/login.css'

// Assets
import logo from '../../shared/assets/img/logo-300x150.png'

// Router
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="container-login">
            <div className="wrapper">
                {/* Logo  */}
                <div className="logo-login">
                    <img src={logo} alt="Logo" /> 
                </div>

                <Link to={'/login'} className='button-login'>
                    Login
                </Link>

            </div>
        </div>
    )
}


export default Login;