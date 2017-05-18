import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class FrontDoor extends React.Component{
  render(){
    return (
      <nav className="frontDoor">
        <Link to="/signup" className="frontDoorSignUp">Sign up</Link>
        <img className="bg-img" src="assets/reading.jpeg"/>
      </nav>
    );
  }
}

export default FrontDoor;
