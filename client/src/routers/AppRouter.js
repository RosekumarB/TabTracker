import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import Welcome from '../components/Welcome'
import Register from '../components/Register'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const AppRouter = () => (
    <Router history = { history } >
        <div>
            <Switch>
                <Route path = "/" component = { Welcome } exact = { true } />
                <Route path = "/register" component = { Register } exact = { true } />
            </Switch>
        </div>
    </Router>

)

export default AppRouter ;