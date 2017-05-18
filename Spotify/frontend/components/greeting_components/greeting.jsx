import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <div className="buttons">
      <Link to="/login" className="loginLink">Login</Link>
      <br/>
      <Link to="/signup" className="signupLink">Sign up</Link>
      <img className="bg-img" src="assets/reading.jpeg"/>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
