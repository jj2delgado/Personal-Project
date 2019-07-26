import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="Footer-Container">
                <Link to='/about'>
                    <div className="About-Link">About</div>
                </Link>

                <Link to='/contact'>
                    <div className="Contact-Link">Contact Us</div>
                </Link>
            </div>
        )
    }
}
export default Footer