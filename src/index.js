import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Login from './components/login';
import About from './components/about';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';



ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
