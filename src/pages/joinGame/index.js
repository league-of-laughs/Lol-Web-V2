import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class JoinGame extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: null,
      room: null,
      waiting: false
    }

    const { socket, history } = this.props;

    socket.on('client-attempt_join', (response) => {
      response ? this.joinGame() : alert('wrong room code')
    });

    socket.on('client-start', () => {
      history.push('/captionPage')
    });
  }

  handleClick = () => {
    const { name, room } = this.state;
    const { socket } = this.props

    if(!name || !room){
      alert('fill out the forms')
      return;
    }

    socket.emit('client-addPlayer', { room, name });
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({[name] : value})
  }
  
  joinGame = () => {
    const { name, room } = this.state;
    localStorage.setItem('room', room);
    localStorage.setItem('name', name);
    this.setState({ waiting: true });
  }

  render(){
    const { waiting } = this.state;

    return(
      waiting ? 
      <div>
        <h1>Waiting for game to start</h1>
      </div>
      :
      <div>
        <div className='header'>
          <img src={ Logo }/>
        </div>
        <div className='containerPlayer'>
          <input onChange={this.handleChange} placeholder='Room Code' name='room'/>
          <input onChange={this.handleChange} placeholder='Name' name='name'/>
          <button onClick={this.handleClick}>Join Game</button>
        </div>
      </div>
    )
  }
}

export default JoinGame;