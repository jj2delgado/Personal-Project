import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
    render(){
        let displayName = "menuOff"
        {this.state.menuBarOn ? displayName="menuOn" : displayName="menuOff"}
        
        return(
            <div className="Header">
                <h1 className="Title">Cohen & Co</h1>
                
                <div className="Dropdown-container" onClick={() => {this.handleMenuToggle()}}>

                    <i className={`material-icons `}>menu
                    <div className={`Right-Container ${displayName}`}>
                        
                        <Link to='/'>
                            <p className='Home-Link'>Home</p>
                        </Link>
                        <Link to='/cart'>
                            <p className='Cart-Link'>Cart</p>
                        </Link>

                        <Link to='/login'>
                            <p className='Sign-In-Link'>Sign In/Register</p>
                        </Link>
                        
                    </div>
                    </i>

                    
                </div>
            </div>
        )
    }
}
export default Header