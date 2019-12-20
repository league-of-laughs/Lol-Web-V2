import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png';
import roomcode from '../../utils/roomcode';

class StartPage extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      room: null
    }
    const { socket } = this.props;

    socket.on('host-displayAddedPlayer', (name) => {
      const { onPlayerChange } = this.props;
      onPlayerChange(name);
    })
  }

  componentDidMount(){
    const { socket } = this.props;
    const room = roomcode();
    this.setState({ room });
    socket.emit('host-newGame', room);
    sessionStorage.setItem('room', room);
  }

  handlePress = () =>{
    const { socket, history } = this.props;
    const { room } = this.state;

    socket.emit('host-startGame', (room));
    history.push('/memePage');
  }
  render(){
    const { room } = this.state;
    const { players } = this.props;
    return(
      <div className = "container">
        <div className = "side">
          <h1>Room Code</h1>
          <p>{ room }</p>
          <button onClick={ this.handlePress }>Start</button>
        </div>
        <div className = "main">
          <div className = "top">
            <div>
            <h2>Spectators</h2>
            <p style = {{ textAlign:'center' }} >0</p>
            </div>
            <img id='logo' src={ Logo }/>
          </div>
          <h1 id="players">Players</h1>
          <div className = "playersDisplay">
            { players.map(player => {
              return <p>{ player }</p>
            }) }
          </div>
        </div>
      </div>
    )
  }
}

export default StartPage;