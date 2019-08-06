import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes'
// import Header from './components/header/header'
// import Footer from './components/footer/footer'
import './reset.css'
import './App.css';

class App extends Component {

  render(){
    return (
      <Router>
          <div className="App">
            {/* <Header /> */}
            {routes}
            {/* <Footer /> */}
          </div>
      </Router>
      
      );
    }
  }

export default App;
