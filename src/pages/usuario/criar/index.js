import React from 'react'
import './styles/criar.css'

// Components
import BottomLine from '../../../shared/components/BottomLine/index'

// Bootstrap
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// Redux
import { useSelector } from 'react-redux'

const CriarU = () => {

    const sidebarOpen = useSelector(state => state.ui.sidenav.isOpen);

    return (
        <div style={sidebarOpen ? {position: "relative", marginLeft: "260px"} : {position: "relative", marginLeft: "0px"}}>
            <Container className="container-criarU" >
                <Row className="justify-content-start" >
                    <h1 >Criar Usuário</h1>

                    <BottomLine />

                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default CriarU;
