import React, { Component } from 'react';


import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import About from './components/About';
import Howitworks from './components/Howitworks';
import Cart from './components/Cart';
import Clothing from './components/Clothing';


class App extends Component {
  render() {
    return (
      <div>


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/about' component={About} />
          <Route path='/how-it-works' component={Howitworks} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/clothing' component={Clothing} />
         
        </Switch>




      </div>
    );
  }
}

export default App;
