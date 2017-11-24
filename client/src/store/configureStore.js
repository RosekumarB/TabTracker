import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import tokenReducer from '../reducers/tokenReducer'
import loginReducer from '../reducers/loginReducer'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=> {
    const store = createStore(combineReducers({
        user: userReducer,
        token: tokenReducer,
        login: loginReducer
    }), composeEnhancer(applyMiddleware(thunk)))
    return store;
}