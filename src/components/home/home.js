import React, {Component} from 'react'
import Categories from '../categories/categories'

class Home extends Component{
    render(){
        return(
            <div className="Home-Container">
                <div>Insert Advertisement Here</div>
                <Categories/>
            </div>
        )
    }
}

export default Home