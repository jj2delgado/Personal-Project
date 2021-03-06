import React, {Component} from 'react'
import Categories from '../categories/categories'
import {Link} from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import './home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
            <div className="Home-Container">
                <div className="Catchphrase-Container">
                    <div className="Separator">
                     <p className='Catchphrase-Intro'>Make your </p>
                     <p className='First-Home'>Home </p>
                    </div>

                    <div className="Second-Separator">
                        <p className="Catchphrase-Middle">feel</p>
                        <p className="Catchphrase-Last">like</p>
                        <p className="Last-Home">Home.</p>
                    </div>

                    <div className="Hook-Container">
                        <p className="Hook">Register</p>
                        <Link to='/login'>
                            <p className='Second-Register-Link'>now</p>
                         </Link>
                        <p className='Hook-Second'>and get</p>
                        <p className='Condition'>10%</p>
                        <p className="Hook-End">off your first purchase over $50!</p>
                    </div>
                </div>
                <div className="Intro-Container">
                    <p className="Category-Intro">Start Shopping Now!</p>
                </div>

                <div className="Categories-Container">
                <Categories/>
                </div>
                
            </div>
            <div>
            <Footer />
            </div>
            
            </div>
        )
    }
}

export default Home