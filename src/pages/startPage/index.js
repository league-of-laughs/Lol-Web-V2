import React, {Component} from 'react';
import './style.scss';
import Logo from '../../assets/logo.png';
import roomcode from '../../utils/roomcode';
import { Socket } from 'net';

class StartPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      players: [],
      roomCode: null
    }

    const {socket} = this.props;
    //socket for incoming players, add to state
    socket.on('web-displayAddedPlayer', (name) => {
      console.log('player');
      const {players} = this.state;
      players.push(name);
      this.setState({players});
    })
  }

  componentDidMount(){
    const {socket} = this.props;
    const roomCode = roomcode();
    this.setState({roomCode})
    socket.emit('web-newGame',roomCode);
  }

  handlePress(){
    //when click send appropiate socket response and route to new page
  }
  render(){
    const { roomCode, players } = this.state;
    return(
      <div className = "startContainer">
        <div className = "side">
          <h1>Room Code</h1>
          <p>{roomCode}</p>
          <button>Start</button>
        </div>
        <div className = "main">
          <div className = "top">
            <h2>Spectators</h2>
            <img src={Logo}/>
          </div>
          <h1>Players</h1>
          <div className = "playersDisplay">
            {players.map(player => {
              return <p>{player}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default StartPage;