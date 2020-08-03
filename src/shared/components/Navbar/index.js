
import React, { useState } from 'react';

// Styles
import './styles/index.css'

// Components
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'


const Navbar = () => {

    return(
        
        
        <div className="container-nav">
            
            <Sidebar/>
            <Topbar />
        </div>
        
            
            
    )
}

export default Navbar;
