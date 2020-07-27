
import React, { useState } from 'react';

// Styles
import './styles/index.css'

// Components
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'


const Navbar = () => {

     // State
     const [ toggleSide, setToggleSide ] = useState(true);

    const toggleSidebar = (state) => {
        setToggleSide(state)
    } 

    return(
        
        <div> 
            <div className="container-nav">
                <Sidebar toggle={toggleSide}/>
                <Topbar parentCb={toggleSidebar} />
            </div>
        </div>
            
            
    )
}

export default Navbar;
