
import React from 'react';
import './app.css'

// React-Router
import {  BrowserRouter as Router } from 'react-router-dom'

// History
import history from './helpers/history'


// Router 
import Routes from './router'

const App = () => {
  return (
    
    <Router history={history}>
      <Routes />
    </Router>
    
  );
}

export default App;
