import React from 'react'
import AuthenticationService from '../services/AuthenticationService'
import { setToken, setUser, setLoginStatus } from '../actions/auth'
import { connect } from 'react-redux'

class Login extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            email: "sagar",
            password: "fkdsajfhk",
            error: null
        }
    }

    onRegister = (e) => {
        console.log('This was clicked, trying to login');
        AuthenticationService.login({
            email: this.state.email,
            password: this.state.password
        }).then( (response) => {
            this.props.dispatch(setToken(response.data.token))
            this.props.dispatch(setUser(response.data.user))
            this.props.dispatch(setLoginStatus(true))
            this.setState( { error : null })
            this.props.history.push('/songs')
            console.log(response.data);
            
        }).catch((err)=> {
            console.log(err)
            this.setState( { error: err.response.data.error})
        })
    }

    onEmailChange = (e) => {
        console.log(e.target.value);
        this.setState( { email: e.target.value })
    }

    onPasswordChange = (e) => {
        console.log(e.target.value);
        this.setState( { password: e.target.value })
    }

    render() {
        return (
            <div>
            <h1> Login here </h1>
            <form autoComplete="off">
                <input 
                    type = "email"
                    name = "email"
                    placeholder = "email"
                    //value = { this.state.email }
                    onChange = { this.onEmailChange }
                />
                <br/>
                <input 
                    type = "password"
                    name = "password"
                    placeholder = "password"
                // value = { this.state.password }
                    onChange = { this.onPasswordChange }
                />
            </form>
            <button 
                onClick = { this.onRegister }
            >
                Login 
            </button>
            {this.state.error || <div> {this.state.error} </div> }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(Login)