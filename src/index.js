import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
      <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Sign Up</NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>
  </div>;

const Home = () =>  (
  <div>
    <h1>Home!</h1>
  </div>
)

const About = () => {
  return (
    <h1>This is my about component!</h1>
  );
};

const Signup = () =>  (
  <div>
    <h1>Sign up!</h1>
  </div>
)

const Messages = () => {
  return (
    <div>
      <ul>
        <li>Do this!</li>
        <li>Do that?? Please!</li>
      </ul>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <React.Fragment>
    <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
      <Route exact path="/signup" render={Signup} />
      <Route exact path="/messages" render={Messages} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
