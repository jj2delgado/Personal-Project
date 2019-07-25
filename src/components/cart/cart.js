import React, {Component} from 'react'
import {connect} from 'react-redux'

class Cart extends Component{
    constructor(){
        super()

        this.state ={
            cart:[]
        }
    }
    render(){
        return(
            <div>
                <h1>CART</h1>
                {/* //map cart here */}
            </div>
        )
    }
}
export default connect(null)(Cart)