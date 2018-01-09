import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import Header from './components/Header'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import store from './store/store'


console.log(store.getState().token.token)
const jsx = (
    <Provider store = { store }>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));