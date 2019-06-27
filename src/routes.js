import React from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StartPage from './pages/startPage';

const SERVER_URL = 'http://a0c40385.ngrok.io';
const socket = io.connect(SERVER_URL);

export default(
  <Router>
    <Switch>
      <Route exact path = '/' render = {(routeProps) => <StartPage {...routeProps} socket = {socket}/>} />
    </Switch>
  </Router>
)