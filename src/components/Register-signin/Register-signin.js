import React, {Component} from 'react'

class RegisterSignIn extends Component{
    render(){
        return(
            <div className="Account-Container">
                <div className="Register-Container">
                    <h1>Don't Have an Account? Sign up!</h1>
                    <input placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                    <input placeholder="Username"></input>
                    <input placeholder="Password"></input>
                    <input placeholder="Email"></input>
                    <button>Submit</button>
                </div>

                <div className="Sign-In-Container">
                    <h1>Login</h1>
                    <input placeholder="Username"></input>
                    <input placeholder="Password"></input>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}
export default RegisterSignIn