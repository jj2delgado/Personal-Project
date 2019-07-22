import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
            <div>
                <Link to='/about'>
                    <div>About</div>
                </Link>
            </div>
        )
    }
}
export default Footer