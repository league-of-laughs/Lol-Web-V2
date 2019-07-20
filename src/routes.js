import React from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StartPage from './pages/startPage';
import MemePage from './pages/memePage';
import VotePage from './pages/votePage';
import WinnerPage from './pages/winnerPage';

const SERVER_URL = 'http://localhost:3000';
const socket = io.connect(SERVER_URL);

export default(
  <Router>
    <Switch>
      <Route exact path = '/' render = {(routeProps) => <StartPage {...routeProps} socket = {socket}/>} />
      <Route exact path = '/memePage' render = {(routeProps) => <MemePage {...routeProps} socket = {socket}/>} />
      <Route exact path = '/votePage' render = {(routeProps) => <VotePage {...routeProps} socket = {socket}/>} />
      <Route exact path = '/winnerPage' render = {(routeProps) => <WinnerPage {...routeProps} socket = {socket}/>} />
    </Switch>
  </Router>
)