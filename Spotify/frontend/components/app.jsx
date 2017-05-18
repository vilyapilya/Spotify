import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting_components/greeting_container';
import SessionFormContainer from './session_components/SessionFormContainer.js';
import FrontDoorContainer from './front_door_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="outer">
    <div className="top">
      <GreetingContainer />
      <Link to="/" className="header-link">
           <h1>Home</h1>
      </Link>
    </div>
    <Route exact path="/" component={FrontDoorContainer} />
    <Route exact path="/login" component={SessionFormContainer} />
    <Route exact path="/signup" component={SessionFormContainer} />
 </div>
);

export default App;
