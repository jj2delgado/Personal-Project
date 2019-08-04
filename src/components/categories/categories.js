import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './categories.css'

class Categories extends Component{
    render(){
        return(
            <div className='Categories-Container'>

                <div className='Category-Title-Container'>
                    <h1 className='Categories-Title'>Home Decor Categories</h1>
                </div>
                

                <div className="Links-Container">

                <div className="bathroom-container">
                <Link to='/categories/bathroom'>
                    <img className="bathroom-image" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2015%2F06%2F15215346%2F101730178.jpg&w=380&c=sc&poi=%5B275%2C366%5D&q=85&h=505.40000000000003" alt=""/>
                    <div className="bathroom-title">Bathroom</div>
                </Link>
                </div>

                <div className="bedroom-container">
                <Link to='/categories/bedroom'>
                    <img className="bedroom-image"src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
                    <div>Bedroom</div>
                </Link>
                </div>

                <div className="kitchen-container">
                <Link to='/categories/kitchen'>
                    <img className="kitchen-image"src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
                    <div>Kitchen</div>
                </Link>
                </div>

                <div className="livingroom-container">
                <Link to='/categories/livingroom'>
                    <img className="livingroom-image"src="https://images.unsplash.com/photo-1545083036-b175dd155a1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" alt=""/>
                    <div>Living Room</div>
                </Link>
                </div>

                <div className="office-container">
                <Link to='categories/office'>
                    <img className="office-image"src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
                    <div>Office</div>
                </Link>
                </div>

                <div className="outdoor-container">
                <Link to='categories/outdoor'>
                    <img className="outdoor-image"src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                    <div>Outdoor</div>
                </Link>
                </div>

                </div>
                <div className="categories-spacing"/>
            </div>
        )
    }
}
export default Categories