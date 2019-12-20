import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class PlayerVotePage extends Component{
  constructor(props){
    super(props);

    const { socket, history } = this.props;

    this.state = {
      waiting: false
    }

    socket.on('client-startVoting', () => {
      this.setState({ waiting: false });
    });

    socket.on('game-over', (winner) => {
      sessionStorage.setItem('winner', winner);
      history.push('/winnerPage');
    })
  }

  vote = (choice) => {
    const { socket } = this.props;
    const room = sessionStorage.getItem('room');

    const data = { choice, room };

    socket.emit('client-voteMeme', data);
    this.setState({ waiting: true });
  }

  render(){
    const { waiting } = this.state;

    return(
      waiting ? 
      <div>
        <h1>Waiting for other players</h1>
      </div>
      :
      <div>
        <div className='header'>
          <img src={ Logo }/>
          <h2>Vote</h2>
        </div>
        <div className='containerPlayer'>
          <button onClick={ () => this.vote(1) }>1</button>
          <button onClick={ () => this.vote(2) }>2</button>
        </div>
      </div>
    );
  }
}

export default PlayerVotePage;