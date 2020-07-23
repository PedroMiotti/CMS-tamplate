
import React, { useEffect, useState } from 'react'

// Style
import './styles/loginForm.css'

// Assets
import logo from '../../shared/assets/img/logo-300x150.png'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/_auth/auth'

// Components
import SnackMessage from '../../shared/components/Snackbar/index'
import SnackLoad from '../../shared/components/Snackload/index';



const LoginForm = () => {

    const [ usuarioInput, setUsuarioInput ] = useState('');
    const [ senhaInput, setSenhaInput ] = useState('');

    const dispatch = useDispatch();

    const error = useSelector(state => state.authenticate.auth.error);
    const loading = useSelector(state => state.authenticate.auth.loading);

    const loginUser = () =>{
        dispatch(login(usuarioInput, senhaInput))

    }

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
                            
                            <input className="usuario" placeholder="Usuario" type="text" placeholder="&#xf007;   Usuário" style={{fontFamily:'sans-serif, FontAwesome'}} value={usuarioInput} onInput={e => setUsuarioInput(e.target.value)}/>
                        </div>

                        <div className="senha-div">

                            <input className="senha"  type="password"  placeholder="&#xf023;   Senha" style={{fontFamily:'sans-serif, FontAwesome'}} value={senhaInput} onInput={e => setSenhaInput(e.target.value)}/>
                        </div>

                </form>

                <button className='button-login-form' onClick={loginUser}>
                    Login
                </button>


                {loading && <SnackLoad show={loading}/>}

                {error && <SnackMessage message={"Usuario ou senha incorretos !"} color={"error"} show={error}/>}


            </div>
        </div>
    )
}


export default LoginForm;