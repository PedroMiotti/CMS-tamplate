import React, { useState, useEffect, useRef } from 'react'
import './styles/editar.css'

// Components
import BottomLine from '../../../shared/components/BottomLine/index'
import SnackMessage from '../../../shared/components/Snackbar/index'
import SnackLoad from '../../../shared/components/Snackload/index';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getListaPerfil } from '../../../store/_entities/perfil';
import { editUser } from '../../../store/_entities/usuario';
import { userInfo } from '../../../store/_entities/usuario';

// Router
import { useParams } from 'react-router-dom';

// Helpers
import { toUppercase } from '../../../helpers/toUppercase'


const EditarU = () => {
    
    //_ui --> Sidebar
    const sidebarOpen = useSelector(state => state.ui.sidenav.isOpen);
    //_entitie --> Usuario
    const lista_perfil = useSelector(state => state.entitie.perfil.lista);
    const usuarioEditedSuccess = useSelector(state => state.entitie.usuario.success);
    const usuarioEditedFailed = useSelector(state => state.entitie.usuario.error);
    const usuarioEditedLoading = useSelector(state => state.entitie.usuario.loading);
    const usuarioEditedErrorMessage = useSelector(state => state.entitie.usuario.errorMessage);
    const usuarioEditedSuccessMessage = useSelector(state => state.entitie.usuario.successMessage);
    const usuarioNome = useSelector( state => state.entitie.usuario.nome);
    const usuarioLogin = useSelector( state => state.entitie.usuario.login);
    const usuarioPerfil = useSelector( state => state.entitie.usuario.perfil);


    const [ u_nome , setU_nome ] = useState(usuarioNome);
    const [ u_perf , setU_perf ] = useState(usuarioPerfil);


    // Input refs
    const nomeInput = useRef();
    const perfilInput = useRef();

    const dispatch = useDispatch()

    // Route param - getting the selected userID
    const { userID } = useParams();
    
    useEffect(() => {
        
        dispatch(getListaPerfil());
      
    },[])

    useEffect(() => {

        dispatch(userInfo(userID))

        setU_nome(usuarioNome)
        setU_perf(usuarioPerfil)

    }, [usuarioNome, usuarioPerfil])
    

    const editarUsuario = (e) => {
        e.preventDefault();

        const perfilId = perfilInput.current.value;

        dispatch(editUser(userID, u_nome, perfilId))

    }

    return (
        <div style={sidebarOpen ? {position: "relative", marginLeft: "260px"} : {position: "relative", marginLeft: "0px"}}>
            <Container className="container-criarU" >
                <Row className="justify-content-start" >
                    <h1 >Editar Usuário</h1>

                    <BottomLine />

                </Row>
                <Row  className="justify-content-center">

                    <Form className="form-frame" onSubmit={editarUsuario}>

                        <h5>Informação do usuário</h5>
                        <BottomLine/>
                    
                        <Form.Group controlId="formBasicLogin">
                            <Form.Label>Login</Form.Label>
                            <Form.Control value={usuarioLogin} disabled/>
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control ref={nomeInput} value={u_nome} onChange={e => setU_nome(e.target.value)} onInput={(e) => toUppercase(e)}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Perfil</Form.Label>
                            <Form.Control ref={perfilInput} as="select" id="inlineFormPerfil" className="mr-sm-2 " custom>

                                {lista_perfil.map((lista) => (
                                    <option key={lista.perf_id + 1} selected={(usuarioPerfil === lista.perf_id) ? "selected" : ""} value={lista.perf_id}>{lista.perf_nome}</option>
                                ))}

                            </Form.Control>
                            
                        </Form.Group>

                        <BottomLine/>

                        
                        <Button variant="success" type="submit" block size="lg">
                            Salvar
                        </Button>
                    
                    </Form>
                </Row>
            </Container>
            

            {usuarioEditedLoading && <SnackLoad show={usuarioEditedLoading}/>}

            {usuarioEditedFailed && <SnackMessage message={usuarioEditedErrorMessage} color={"error"} show={usuarioEditedFailed}/>}

            {usuarioEditedSuccess && <SnackMessage message={usuarioEditedSuccessMessage} color={"success"} show={usuarioEditedSuccess}/>}

        </div>
    )
}

export default EditarU;
