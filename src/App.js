import React, { Component } from 'react';

import io from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StartPage from './pages/startPage';
import MemePage from './pages/memePage';
import VotePage from './pages/votePage';
import WinnerPage from './pages/winnerPage';
import MainPage from './pages/mainPage';
import JoinGame from './pages/joinGame';
import CaptionPage from './pages/captionPage';
import PlayerVotePage from './pages/playerVotePage';

const SERVER_URL = 'http://localhost:3000';
const socket = io.connect(SERVER_URL);

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      players: []
    }
  }

  onPlayerChange = (name) => {
    const { players } = this.state;
    players.push(name);
    this.setState({ players });
  }

  render(){
    const { players } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path = '/' render = {(routeProps) => <MainPage  {...routeProps} socket = { socket } />} />
          <Route exact path = '/startPage' render = {(routeProps) => <StartPage {...routeProps} socket={ socket } players={ players } onPlayerChange={ this.onPlayerChange }/>} />
          <Route exact path = '/joinGame' render = {(routeProps) => <JoinGame {...routeProps} socket = {socket} players={ players }/>} />
          <Route exact path = '/captionPage' render = {(routeProps) => <CaptionPage {...routeProps} socket = {socket} players={ players }/>} />
          <Route exact path = '/playerVotePage' render = {(routeProps) => <PlayerVotePage {...routeProps} socket = {socket} players={ players }/>} />
          <Route exact path = '/memePage' render = {(routeProps) => <MemePage {...routeProps} socket = {socket} players={ players }/>} />
          <Route exact path = '/votePage' render = {(routeProps) => <VotePage {...routeProps} socket = {socket} players={ players }/>} />
          <Route exact path = '/winnerPage' render = {(routeProps) => <WinnerPage {...routeProps} socket = {socket} players={ players }/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
