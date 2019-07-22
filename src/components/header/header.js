import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <div>
                <Link to='/cart'>
                    <h2>Cart</h2>
                </Link>

                <Link to='/'>
                    <h2>Home</h2>
                </Link>
                
                <button>Sign In</button>
            </div>
        )
    }
}
export default Header