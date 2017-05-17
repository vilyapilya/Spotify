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

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="outer">
    <Link to="/" className="header-link">
         <h1>Home</h1>
    </Link>
    <GreetingContainer />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
 </div>
);

export default App;
