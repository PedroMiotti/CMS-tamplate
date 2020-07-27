import React from 'react'
import './styles/404.css'

// Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux'

const PageNotFound = () => {

    const auth = useSelector(state => state.authenticate.auth.isLoggedIn)

    return (
        <div className="container-404">
            <div className="text-404">
                <h1>
                    404
                </h1>
            </div>

            <div className="message-container">
                <h2>Ops! Não tem nada aqui !</h2>
                <h3>Página não encontrada.</h3>

                {auth ? 
                <Link to="/home">
                    <button>home</button>
                </Link>
                :
                <Link to="/">
                    <button>Login</button>
                </Link>
                }
            </div>
        </div>
    )
}

export default PageNotFound
