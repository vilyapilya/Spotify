import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const sessionLinks = () => (

    <div className="buttons">
      <Link to="/login" className="loginLink">Login</Link>
      <br/>
      <Link to="/signup" className="signupLink">Sign up</Link>
    </div>
  
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
