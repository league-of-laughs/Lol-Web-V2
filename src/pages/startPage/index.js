import React, {Component} from 'react';
import './style.scss';
import Logo from '../../assets/logo.png';

class StartPage extends Component{
  render(){
    return(
      <div className = "startContainer">
        <div className = "side">
          <h1>Room Code</h1>
          <p>HTJ83</p>
          <button>Start</button>
        </div>
        <div className = "main">
          <div className = "top">
            <h2>spectators</h2>
            <img src={Logo}/>
          </div>
          <h1>Players</h1>
          <div className = "playersDisplay">
            <h2>Player</h2>
            <h2>Player</h2>
            <h2>Player</h2>
            <h2>Player</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default StartPage;