import React from 'react'
import './styles/notAllowed.css'

// Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux'

const PageNotFound = () => {

    const auth = useSelector(state => state.authenticate.auth.isLoggedIn)

    return (
        <div className="container-nAllowed">
            <div className="text-nAllowed">
                <h1>
                    404
                </h1>
            </div>

            <div className="message-container-nAllowed">
                <h2>Ops, parece que você não tem acesso a essa página !</h2>

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
