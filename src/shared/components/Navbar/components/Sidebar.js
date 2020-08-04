
import React, { useState } from 'react';

// Styles
import './style/sidebar.css';

// Assets
import logo from '../../../assets/img/logo-300x150.png';

// Router
import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon, Collapse, Divider } from '@material-ui/core';
//Icons
import { ExpandLess, ExpandMore, PersonOutline, Dashboard, Add, ListAlt } from '@material-ui/icons';

// Redux
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#252834',
      paddingBlock:'35px',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },

    listItemText: {
        color: 'white',
    },

  }));

const Sidebar = () => {

    const classes = useStyles();

    // _ui
    const sidebarOpen = useSelector(state => state.ui.sidenav.isOpen);
    //_entitie
    const usuarioPerfil = useSelector(state => state.authenticate.auth.user.perf_id);
    
    const [ open, setOpen ] = useState(false);
    const [ selectedIndex, setSelectedIndex ] = useState(1);
    

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return(
    
        <div className="container-side" style={sidebarOpen ? { display:'flex'} : {display : 'none'}}> 
        
            {/* Logo  */}
            <div className="logo-div">
                <img  src={logo} alt="Logo" /> 
            </div>

            <List component="nav" className={classes.root} >
                {/* Dashboard / */}
                <Divider />
                <Link to={'/home'} style={{textDecoration: "none"}}> 
                    <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                        <ListItemIcon>
                            <Dashboard style={{fill: "white"}}/>
                        </ListItemIcon>

                        <ListItemText classes={{ primary: classes.listItemText }} primary="Dashboard" />

                    </ListItem>
                </Link>

                <Divider />
                {/* / Dashboard */}

                {/* Usuario / */}
                {usuarioPerfil === 1 ? 
                        <>
                        <ListItem button onClick={handleClick}>

                            <ListItemIcon>
                                <PersonOutline style={{fill: "white"}}/>
                            </ListItemIcon>

                            <ListItemText classes={{ primary: classes.listItemText }} primary="Usuário" />
                            {open ? <ExpandMore style={{fill: "white"}}/> : <ExpandLess style={{fill: "white"}}/>}
                            
                        </ListItem>
                        
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {/* Criar */}
                                <Divider />
                                <Link to={'/usuario/criar'} style={{textDecoration: "none"}}>
                                    <ListItem button className={classes.nested} selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                                        <ListItemIcon >
                                            <Add style={{fill: "white"}}/>
                                        </ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary="Criar" />
                                    </ListItem>
                                </Link>
                                <Divider />
                                {/* Gerenciar */}
                                <Link to={'/usuario/listar'} style={{textDecoration: "none"}}>
                                    <ListItem button className={classes.nested} selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                                        <ListItemIcon >
                                            <ListAlt style={{fill: "white"}}/>
                                        </ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary="Gerenciar" />
                                    </ListItem>
                                </Link>
                                <Divider />
                            </List>
                        </Collapse>
                        </>
                    :
                        null
                }

                <Divider />
                {/* / Usuario */}


            </List>
            

        </div>
    
    )
}


export default Sidebar;
