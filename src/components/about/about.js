import React,{Component} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

class About extends Component{
    render(){
        return(
            <div>
                <Header />
            <div>
                <h1>About Us</h1>
                <p>Here at Cohen & Co. we're all about providing great product at affordable prices. We're firm believers in the key to happiness being a better home where you can feel safe.
                    
                </p>
            </div>
            <Footer />
            </div>
        )
    }
}
export default About