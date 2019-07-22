import React, {Component} from 'react'
import Header from '../header/header'
import Categories from '../categories/categories'
import Footer from '../footer/footer'

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <h1>This is your Home, I'm also empty T_T</h1>
                <Categories/>
                <Footer />
            </div>
        )
    }
}

export default Home