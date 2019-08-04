import React, {Component} from 'react'
import {connect} from 'react-redux'


class PurchaseHistory extends Component{
    render(){
        return(
            <div>
                <h1>You don't have any prior history</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(PurchaseHistory)