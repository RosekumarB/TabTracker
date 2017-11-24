import React from 'react'
import { history } from '../routers/AppRouter'
import AppBar from 'material-ui/AppBar'
import { Link,NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {setToken, setUser, setLoginStatus} from '../actions/auth'

class Header extends React.Component {

    constructor(props) {
        super(props) 
        this.logout = this.logout.bind(this)
    }
    render() {
        return <div>
            <Link to = "/"><h3> TabTracker </h3> </Link>
            <Link to = "/songs"> browse </Link><div> </div>
            {   this.props.isLoggedIn ? 
                <div>
                    <button onClick= {(e) => this.logout()}> Logout </button>
                    <button onClick = {(e) => history.push('/songs/create') }> Add Song </button>
                </div>: 
                <div>
                    <Link to="/register" > Signup </Link>
                    <Link to="/login"> Login </Link>
                </div>  
            }
        </div>
    }

    logout (){
        console.log('logout clicked')
        this.props.dispatch(setToken(null))
        this.props.dispatch(setUser(null))
        this.props.dispatch(setLoginStatus(false))
        history.push('/')
    }

}



const mapStateToProps = (state) =>({
    isLoggedIn: state.login.loggedIn
})

export default connect(mapStateToProps)(Header);