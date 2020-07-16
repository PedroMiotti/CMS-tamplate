
import React from 'react'

// Style
import './styles/loginForm.css'

// Assets
import logo from '../../shared/assets/img/logo-300x150.png'


import { useHistory } from "react-router-dom";


const LoginForm = () => {
    let history = useHistory();

    return(
        <div className="container-login-form">
            <div className="wrapper-form">
                {/* Logo  */}
                <div className="logo-form">
                    <img src={logo} alt="Logo" /> 
                </div>

                <div className="desc">
                    <p>Bem-Vindo !</p>
                    <p><span>Faça o login para continuar</span></p>

                </div>

                <form className="form-login"> 
                    
                        <div className="usuario-div">
                            
                            <input className="usuario" placeholder="Usuario" type="text" placeholder="&#xf007;   Usuário" style={{fontFamily:'sans-serif, FontAwesome'}}/>
                        </div>

                        <div className="senha-div">

                            <input className="senha"  type="password"  placeholder="&#xf023;   Senha" style={{fontFamily:'sans-serif, FontAwesome'}} />
                        </div>

                </form>

                <button className='button-login-form' >
                    Login
                </button>

            </div>
        </div>
    )
}


export default LoginForm;