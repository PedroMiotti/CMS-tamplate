
import React, { useEffect, useState} from 'react';
import './styles/perfil.css';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { userInfo } from '../../../store/_entities/usuario';

// Components
import BottomLine from '../../../shared/components/BottomLine/index';
import SnackMessage from '../../../shared/components/Snackbar/index'
import SnackLoad from '../../../shared/components/Snackload/index';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Perfil = () => {
    
    // _ui --> Sidenav
    const sidebarOpen = useSelector(state => state.ui.sidenav.isOpen);
    //_auth --> Auth
    const userId = useSelector(state => state.authenticate.auth.user.id);
    //_entitie --> Usuario
    const usuario_id = useSelector( state => state.entitie.usuario.id);
    const usuario_nome = useSelector( state => state.entitie.usuario.nome);
    const usuario_login = useSelector( state => state.entitie.usuario.login);
    const usuario_perfil = useSelector( state => state.entitie.usuario.perfil);

    const usuario_error = useSelector( state => state.entitie.usuario.error);
    const usuario_loading = useSelector( state => state.entitie.usuario.loading);

    const [ u_nome , setU_nome ] = useState('');
    const [ u_login, setU_login ] = useState('');


    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(userInfo(userId))

        setU_nome(usuario_nome)
        setU_login(usuario_login)
        

    }, [usuario_nome, usuario_login])


    return (
        <div style={sidebarOpen ? {position: "relative", marginLeft: "260px"} : {position: "relative", marginLeft: "0px"}}>
            <Container className="container-perfil" >
                <Row className="justify-content-start" >
                    <h1 >Perfil</h1>

                    <BottomLine />

                </Row>
                <Row  className="justify-content-center">

                    <Form className="form-frame">

                        <h5>Informação do usuário</h5>
                        <BottomLine/>
                    
                        <Form.Group controlId="Login">
                            <Form.Label>Login</Form.Label>
                            <Form.Control value={u_login} onChange={e => setU_login(e.target.value)}/>
                            
                        </Form.Group>

                        <Form.Group controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control value={u_nome} onChange={e => setU_nome(e.target.value)}/>
                        </Form.Group>

                        <BottomLine />

                        <Form.Group controlId="senhaAtual">
                            <Form.Text style={{marginBottom: "15px"}} className="text-muted">Para alterar a senha atual, preencha todos os campos abaixo !</Form.Text>
                            <Form.Label>Senha atual</Form.Label>
                            <Form.Control />
                            
                        </Form.Group>

                        <Form.Group controlId="senhaNova">
                            <Form.Label>Nova senha</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group controlId="SenhaNovaConfere">
                            <Form.Label>Confirme a nova senha</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <BottomLine/>

                        <Button variant="success" type="submit" block size="lg">
                            Salvar
                        </Button>
                        
                    </Form>
                </Row>
            </Container>

            {usuario_loading && <SnackLoad show={usuario_loading}/>}

            {usuario_error && <SnackMessage message={"Erro ao encontrar o usuário :("} color={"error"} show={usuario_error}/>}

        </div>
    )
}


export default Perfil;