import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Route, Redirect } from 'react-router-dom';

const PublicRoute = ({isLoggedIn, component:Component, ...rest}) => (
        <Route {...rest} component = {(props) => (
            !isLoggedIn ? (
                <Component {...props}/>
        ):(
                <Redirect to="/songs" push = { true } />)
    )}/>
);
const mapStateToProps = (state) => ({
        isLoggedIn: state.login.loggedIn
})
export default connect(mapStateToProps)(PublicRoute)
