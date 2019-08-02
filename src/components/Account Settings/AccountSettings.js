import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editUser} from '../../ducks/userReducer'

class AccountSettings extends Component{
    constructor(props){
        super(props)
        this.state= {
            firstName: this.props.user.user.name_first,
            lastName: this.props.user.user.name_last,
            newEmail: this.props.user.user.email,
            edit: false
        }
    }

    flipEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]: value})
    }

    editInfo = () => {
        let {firstName, lastName, newEmail} = this.state
        this.props.editUser(this.props.user.user.id, firstName, lastName, newEmail)
        this.flipEdit()
    }

    componentDidUpdate(prevProps){
        let {firstName, lastName, newEmail} = prevProps
        if (firstName !== this.props.user.user.name_first || lastName !== this.props.user.user.name_last || newEmail !== this.props.user.user.email){
            this.render()
        }
    }

    render(){
        console.log(this.props)
        let {edit, firstName, lastName, newEmail} = this.state
        let {username, name_first, name_last, email} = this.props.user.user
        return(
            <div>
            {edit ? (
            <div>
                <div>
                    <p>First Name:</p>
                    <input type="text" value={firstName} name="firstName" onChange={this.handleChange} />
                </div>
                <div>
                    <p>Last Name:</p>
                    <input type="text" value={lastName} name="lastName" onChange={this.handleChange} />
                </div>
                <div>
                    <p>Email:</p>
                    <input type="text" value={newEmail} name="newEmail" onChange={this.handleChange} />
                </div>
                
                <button onClick={this.editInfo}>Save Changes</button>
                <button onClick={this.flipEdit}>Cancel</button>
            </div>
                ) : (
            <div>
                    <h1>Account Settings</h1>
                    <h2>Hello {username}!</h2>
                    <h1>Account Information</h1>
                <div className="Account-Info-Container">
                    <p>First Name: {name_first}</p>
                    <p>Last Name: {name_last}</p>
                    <p>Email: {email}</p>
                    <button onClick={this.flipEdit}>Edit</button>
                </div>
            </div>)}
            
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {editUser})(AccountSettings)