import React, { useEffect } from 'react';
import './styles/listar.css';

// Components
import BottomLine from '../../../shared/components/BottomLine/index';

// Bootstrap
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

// Material UI
import { Edit, Delete } from '@material-ui/icons';

// Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { listUser } from '../../../store/_entities/usuario';


const ListarU = () => {

        //_ui
        const sidebarOpen = useSelector(state => state.ui.sidenav.isOpen);
        //_entitie
        const usuarioLista = useSelector(state => state.entitie.usuario.listaUsuarios);  


        const dispatch = useDispatch()
    
        useEffect(() => {
            
            dispatch(listUser());
          
        },[])
        
        return (
            <div style={sidebarOpen ? {position: "relative", marginLeft: "265px", marginRight: "15px"} : {position: "relative", marginLeft: "15px", marginRight: "15px"}} className="container-listar">

                <Container className="container-criarU" >
                    <Row className="justify-content-start" >
                        <h1 >Listar Usuários</h1>

                        <BottomLine />

                    </Row>

                    <Row>
                        <Table striped borderless hover>
                            <thead className="thead-dark"> 
                                <tr>
                                <th></th>
                                <th>Login</th>
                                <th>Nome</th>
                                <th>Perfil</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarioLista.map((lista) => (
                                    <tr key={lista.user_id}>
                                        <td className="" style={{width:  "8.33%", textAlign: "center"}}>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip-editar">Editar</Tooltip>}>
                                                <Link>
                                                    <Edit style={{fill: "#252834", marginRight: "12px"}}/>
                                                </Link> 
                                            </OverlayTrigger>

                                            <OverlayTrigger overlay={<Tooltip id="tooltip-deletar">Deletar</Tooltip>}>
                                                <Link>
                                                    <Delete style={{fill: "#f05757"}}/>
                                                </Link>
                                            </OverlayTrigger>
        
                                        </td>
                                        <td>{lista.user_login}</td>
                                        <td>{lista.user_nome}</td>
                                        <td >{lista.perf_nome}</td>
                                    </tr>

                                ))}
                                
                            </tbody>
                        </Table>
                    </Row>
                </Container>

            </div>
        );
        
}

export default ListarU;
