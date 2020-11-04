import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Cart from './Cart'

function App() {
  return (
    <Router>
     
      <Header />

      <div className='App'>
      <Switch>
        <Route path = '/cart' component={Cart} />
        <Route path ='/' component={Home} />
      </Switch> 

    </div>
    </Router>
  );
}

export default App;
