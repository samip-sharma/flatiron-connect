import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { ActionCableProvider } from 'react-actioncable-provider';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {HashRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose } from 'redux'
import reducer from './redux/reducer';
import {API_WS_ROOT} from './constants/constants'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(<ActionCableProvider url={API_WS_ROOT} ><HashRouter><Provider store={store}><App /></Provider></HashRouter></ActionCableProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// #for action cable

// {/* <ActionCableProvider url={API_WS_ROOT} ></ActionCableProvider> */}
// +`?user=${localStorage.current_user}`