import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import Bathroom from './components/categories/Bathroom/Bathroom'
import Bedroom from './components/categories/Bedroom/Bedroom'
import Kitchen from './components/categories/Kitchen/Kitchen'
import Livingroom from './components/categories/Livingroom/Livingroom'
import Office from './components/categories/Office/Office'
import Outdoor from './components/categories/Outdoor/Outdoor'
import About from './components/about/about'
import Contact from './components/contact/contact'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/categories/bathroom' component={Bathroom}/>
        <Route path='/categories/bedroom' component={Bedroom} />
        <Route path='/categories/kitchen' component={Kitchen} />
        <Route path='/categories/livingroom' component={Livingroom} />
        <Route path='/categories/office' component={Office} />
        <Route path='/categories/outdoor'component={Outdoor} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Switch>
)