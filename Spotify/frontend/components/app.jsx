import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import SessionFormContainer from './session_components/SessionFormContainer.js';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>Test</h1>
  </div>
);

export default App;
