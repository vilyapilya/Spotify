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
   <header>
     <h1>test</h1>
   </header>

   <Route path="/login" component={SessionFormContainer} />
   <Route path="/signup" component={SessionFormContainer} />
 </div>
);

export default App;
