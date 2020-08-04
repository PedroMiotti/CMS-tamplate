import React from 'react'
import './styles/contentWrapper.css'

// Redux
import { useSelector } from 'react-redux'


const ContentWrapper = ({children}) => {
    
    //_ui
    const sidebarOpen = useSelector(state => state.ui.sidenav.isOpen);
    

    return (
        <div  className={sidebarOpen ? "contentWrapper" : "contentWrapper-closed"}>
            {children}
        </div>
    )
}

export default ContentWrapper;
