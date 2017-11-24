import React from 'react'
import AuthenticationService from '../services/AuthenticationService'

export default class Register extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            email: "sagar",
            password: "fkdsajfhk",
            error: null
        }
        // this.onRegister = this.onRegister.bind(this)
        // this.onEmailChange = this.onEmailChange.bind(this)
        // this.onPasswordChange = this.onPasswordChange.bind(this)
    }

    onRegister = (e) => {
        console.log('This was clicked');
        AuthenticationService.register({
            email: this.state.email,
            password: this.state.password
        }).then( (response) => {
            console.log(response.data);
            this.setState( { error : null })
        }).catch((err)=> {
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
            <h1> Register here </h1>
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
            <button 
                onClick = { this.onRegister }
            >
                Register 
            </button>
            {this.state.error || <div> {this.state.error} </div> }
            </div>
        )
    }
}


