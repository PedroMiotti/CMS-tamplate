
import React, { useState } from 'react'

// Styles
import './style/topbar.css'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../../../../store/_auth/auth'
import { TOGGLE_SIDENAV } from '../../../../store/_ui/sidenav'

// React Router
import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Popover, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
//Icons
import { ExitToApp, AccountCircle, Menu, ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    avatarColor: {
        color: '#fff',
        backgroundColor: '#333747',
        boxShadow: "0 8px 10px rgba(0,0,0,.19),0 4px 4px rgba(0,0,0,.23)!important",
        alignSelf: "center"

    },
}));

const Topbar = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.authenticate.auth.user);

    const sidebarOpen = useSelector(state => state.ui.sidenav.isOpen);

    let firstLetter;
    let getLowerCaseName;
    if(userInfo.nome) {
        firstLetter = userInfo.nome[0].toUpperCase();
        getLowerCaseName =  firstLetter + userInfo.nome.slice(1).toLowerCase()
    }
    
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
      };
    
      const handleClickAway = () => {
        setOpen(false);
        setAnchorEl(null);
      };

      const toggleSideBar = () => {
          dispatch(TOGGLE_SIDENAV())
      }

      const logoutUser = () => {
            dispatch(LOGOUT())
      }

      const id = open ? 'simple-popover' : undefined;

    return(
        <div className="container-top">

            <div className="hambuguer" style={sidebarOpen ? {marginLeft: '260px'} : {marginLeft: '20px'}}>
                <button onClick={toggleSideBar} style={{border: 'none', backgroundColor: 'white'}}>
                        {sidebarOpen ? <ArrowBack/> : <Menu />}
                </button>
            </div>
                
            <div className="avatar-div">
                <button onClick={handleClick} style={{border: 'none', backgroundColor: 'white'}}>

                    <Avatar className={classes.avatarColor}>{firstLetter}</Avatar>

                    <h4>{getLowerCaseName}</h4>
                </button>
            
                {open ? (
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClickAway}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        >
                        <List component="nav" >
                            <Link to="/usuario/perfil">
                                <ListItem button onClick={handleClickAway}>

                                    <ListItemIcon >
                                        <AccountCircle />
                                    </ListItemIcon>

                                    <ListItemText primary="Perfil" />
                                </ListItem>
                            </Link>

                            <ListItem button onClick={logoutUser}>

                                <ListItemIcon>
                                    <ExitToApp />
                                </ListItemIcon>

                                <ListItemText primary="Sair" />
                            </ListItem>
                        </List>
                        
                    </Popover>
                ) : null}
            </div>

                
            

        </div>
    )
}


export default Topbar;
