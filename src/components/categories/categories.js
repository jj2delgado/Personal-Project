import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Categories extends Component{
    render(){
        return(
            <div>
                <h1>Categories</h1>
                <Link to='/categories/bathroom'>
                    <div>Bathroom</div>
                </Link>
                <Link to='/categories/bedroom'>
                    <div>Bedroom</div>
                </Link>
                <Link to='/categories/kitchen'>
                    <div>Kitchen</div>
                </Link>
                <Link to='/categories/livingroom'>
                    <div>Living Room</div>
                </Link>
                <Link to='categories/office'>
                    <div>Office</div>
                </Link>
                <Link to='categories/outdoor'>
                    <div>Outdoor</div>
                </Link>
            </div>
        )
    }
}
export default Categories