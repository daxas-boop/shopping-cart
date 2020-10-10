import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/Nav'
import Shop from './components/shop/Shop'
import Home from './components/home/Home'
import Cart from './components/ShoppingCart'
import { Provider } from './components/ItemsContext'

function App() {
  return (
    <Provider>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
