import React,{Component} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

class About extends Component{
    render(){
        return(
            <div>
                <Header />
                <div>You ever hear about Wall Street, Morty? You know what those guys do in their fancy boardrooms? They take their balls and they dip them in cocaine and wipe them all over each other.</div>
                <Footer />
            </div>
        )
    }
}
export default About