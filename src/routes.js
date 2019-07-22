import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import Bathroom from './components/categories/Bathroom/Bathroom'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/categories/bathroom' component={Bathroom}/>
    </Switch>
)