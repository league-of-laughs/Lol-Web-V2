import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import pickMeme from '../../utils/meme';
import './style.scss';

class MemePage extends Component{
  constructor(props){
    super(props);

    this.state = {
      meme: null,
      seconds: 60,
      done: false
    }
    const { socket, history } = this.props;

    socket.on('all-doneUploading', () => {
      const room = sessionStorage.getItem('room');

      socket.emit('host-setPlayerNumbers', room);
    });

    socket.on('client-startVoting', (game) => {
      sessionStorage.setItem('game', JSON.stringify(game));
      history.push('/votePage')
    });

    socket.on('web-playerUploadedMeme', (name) => {
      //show player as uploaded
    })
  }

  componentDidMount(){
    const meme = pickMeme();
    this.setState({ meme });
    sessionStorage.setItem('meme', meme);
    this.timer = setInterval(() => {
      this.countDown();
    }, 1000);
  }

  countDown = () => {
    let { seconds, done } = this.state;
    const { socket, history } = this.props;
    if(seconds > 0){
      this.setState({ seconds: seconds - 1 });
    }
    else if (!done){
      const room = sessionStorage.getItem('room');
      socket.emit('host-setPlayerNumbers', room);
      socket.emit('host-caption_timout', room);
      this.setState({ done: true });
    }
  }

  render(){
    let { meme, seconds } = this.state;
    const { players } = this.props;

    return(
      <div className="container">
        <div className="side">
          <h1>Current Meme</h1>
          <p>Fill in the captions</p>
          <p>{ seconds }</p>
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