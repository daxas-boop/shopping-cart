import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/Nav'
import Shop from './components/Shop'
import Home from './components/Home'
import Cart from './components/ShoppingCart'

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop-cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
