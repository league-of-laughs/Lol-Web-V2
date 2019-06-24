import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StartPage from './pages/startPage';

export default(
  <Router>
    <Switch>
      <Route exact path = '/' component = {StartPage} />
    </Switch>
  </Router>
)