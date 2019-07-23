import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register, login} from '../../ducks/userReducer'



class RegisterSignIn extends Component{
    constructor(){
        super()
        this.state = {
            name_first:'',
            name_last: '',
            username_register: '',
            password_register: '',
            email: '',
            username_login:'',
            password_login:'',
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]:value})
    }

    registerUser = () => {
        this.props.register(this.state.name_first, this.state.name_last, this.state.username_register, this.state.password_register, this.state.email)
        this.setState({name_first:'', name_last:'', username_register:'', password_register:'', email:''})
    }

    signInUser = () => {
        this.props.login(this.state.username_login, this.state.password_login)
        this.setState({username_login:'', password_login:''})
    }

    render(){
        let {name_first, name_last, username_register, password_register, email, username_login, password_login} = this.state
        let {user} = this.props
        console.log(user)
        if (user.loggedIn) return <Redirect to='/' />
        return(
            <div className="Account-Container">
                <div className="Register-Container">
                    <h1>Don't Have an Account? Sign up!</h1>
                    <input placeholder="First Name" value={name_first} name="name_first" onChange={this.handleChange}></input>
                    <input placeholder="Last Name" value={name_last} name="name_last" onChange={this.handleChange}></input>
                    <input placeholder="Username" value={username_register} name="username_register" onChange={this.handleChange}></input>
                    <input placeholder="Password" value={password_register} name="password_register" onChange={this.handleChange}></input>
                    <input placeholder="Email" value={email} name="email" onChange={this.handleChange}></input>
                    <button onClick={this.registerUser}>Submit</button>
                </div>

                <div className="Sign-In-Container">
                    <h1>Login</h1>
                    <input placeholder="Username" value={username_login} name="username_login" onChange={this.handleChange}></input>
                    <input placeholder="Password" value={password_login} name="password_login" onChange={this.handleChange}></input>
                    <button onClick={this.signInUser}>Login</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state.user
}
export default connect(mapStateToProps,{register, login})(RegisterSignIn)