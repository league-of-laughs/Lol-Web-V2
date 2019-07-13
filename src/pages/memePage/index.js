import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import pickMeme from '../../utils/meme';
import './style.scss';

class MemePage extends Component{
  constructor(props){
    super(props);

    this.state = {
      meme: null,
      players: ['tommy','tommy','tommy','tommy']
    }
  }

  componentDidMount(){
    const meme = pickMeme();
    this.setState({ meme });
  }

  render(){
    const { meme, players } = this.state;
    return(
      <div className="container">
        <div className="side">
          <h1>Current Meme</h1>
          <p>Fill in the captions</p>
          <p>58</p>
        </div>
        <div id="memePageMain" className="main">
            <img id='logo' src={ Logo }/>
          <img src={ meme } id="voteMeme"/>
          <div className = "playersDisplay">
            {players.map(player => {
              return <p>{ player }</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default MemePage;