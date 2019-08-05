import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import About from './components/about/about'
import Contact from './components/contact/contact'
import RegisterSignIn from './components/Register-signin/Register-signin'
import Category from './components/categories/Category'
import AccountSettings from './components/Account Settings/AccountSettings'
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/categories/:category' component={Category}/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={RegisterSignIn} />
        <Route path='/accountSettings' component={AccountSettings} />
        <Route path='/purchasehistory' component={PurchaseHistory} />
    </Switch>
)