
import React, { useEffect, useRef } from 'react'

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

// Helpers
import { toUppercase } from '../../helpers/toUppercase'


const LoginForm = () => {

    const loginInput = useRef();
    const senhaInput = useRef();

    const dispatch = useDispatch();

    const error = useSelector(state => state.authenticate.auth.error);
    const loading = useSelector(state => state.authenticate.auth.loading);

    const loginUser = () =>{

        const senha = senhaInput.current.value;
        const loginInp = loginInput.current.value;

        dispatch(login(loginInp, senha))

       
    }

    // Check for enter key
    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            
            loginUser();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [senhaInput]);

      // TODO --> Check this useEffect

    return(
        <div className="container-login-form">
            <div className="wrapper-form">
                {/* Logo  */}
                <div className="logo-form">
                    <img src={logo} alt="Logo" /> 
                </div>

                <div className="desc">
                    <h3>Bem-Vindo !</h3>
                    <p><span>Faça o login para continuar</span></p>

                </div>

                <form className="form-login"> 
                    
                        <div className="usuario-div">
                            
                            <input className="usuario" placeholder="Usuario" type="text" placeholder="&#xf007;   Usuário" style={{fontFamily:'sans-serif, FontAwesome'}} ref={loginInput} onInput={(e) => toUppercase(e)}/>
                        </div>

                        <div className="senha-div">

                            <input className="senha"  type="password"  placeholder="&#xf023;   Senha" style={{fontFamily:'sans-serif, FontAwesome'}} ref={senhaInput} onInput={(e) => toUppercase(e)}/>
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