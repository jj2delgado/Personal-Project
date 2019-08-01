import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../ducks/userReducer'
import './header.css'

class Header extends Component {
    constructor(){
        super()

        this.state = {
            menuBarOn: false
        }
    }


    handleMenuToggle = () => {
        this.setState({
            menuBarOn: !this.state.menuBarOn
        })
    }

    logoutUser = () => {
        this.props.logout()
    }
    render(){
        let displayName = "menuOff"
        this.state.menuBarOn ? displayName="menuOn" : displayName="menuOff"
        
        return(
            <div className="Header">
                <h1 className="Title">Cohen & Co</h1>
                
                <div className="Dropdown-container" onClick={() => {this.handleMenuToggle()}}>

                    <i className={`material-icons `}>menu</i>
                    <div className={`Right-Container ${displayName}`}>
                        
                        <Link to='/'>
                            <p className='Home-Link'>Home</p>
                        </Link>
                        
                        
                        <Link to='/cart'>
                            <p className='Cart-Link'>Cart</p>
                        </Link>
                        <Link to='/accountSettings'>
                            <p className="Account-Settings">Account Settings</p>
                        </Link>
                        <Link to='/purchasehistory'>
                            <p className="Purchase-History-Link">Purchase History</p>
                        </Link>
                        {this.props.user.loggedIn ? (<button onClick={this.logoutUser}>Logout</button>) :
                        (<div>
                            <Link to='/login'>
                                <p className='Sign-In-Link'>Sign In/Register</p>
                            </Link>
                            
                        </div>)}
                        
                    </div>
                    

                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state.user
}

export default connect(mapStateToProps, {logout})(Header)