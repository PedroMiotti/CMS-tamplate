import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Redux 
import store from './store/index'
import { Provider } from 'react-redux'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// React-Router
import { Router } from 'react-router-dom'
import Routes from './router'

// History
import history from './helpers/history'


ReactDOM.render(
 
    <Router history={history}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
