import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import Welcome from '../components/Welcome'
import Register from '../components/Register'
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import Login from '../components/Login'
import Songs from '../components/Songs'
import CreateSongPage from '../components/CreateSongPage'
import EditSongPage from '../components/EditSongPage'

export const history = createHistory()
const AppRouter = () => (
    <Router history = { history } >
        <div>
            <Header/>
            <Switch>
                <Route path = "/" component = { Welcome } exact = { true } />
                <Route path = "/register" component = { Register } />
                <Route path = "/login" component = { Login } />
                <Route path = "/songs" component = { Songs } exact = { true }/>
                <Route path = "/songs/create" component = { CreateSongPage } />
                <Route path = "/edit/:id" component = { EditSongPage } exact = { true } /> 
            </Switch>
        </div>
    </Router>

)

export default AppRouter ;