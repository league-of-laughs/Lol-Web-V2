import React, { Component }  from 'react';
import Logo from '../../assets/logo.png';
import Vote from '../../components/vote';
import MemeDisplay from '../../components/memeDisplay';
import './style.scss';

class VotePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      winner: null,
      playerVotingOne: null,
      playerVotingTwo: null,
      meme: null,
      seconds: 60,
      done: false
    }

    const { socket, history } = this.props;

    socket.on('game-over', (winner) => {
      sessionStorage.setItem('winner', JSON.stringify(winner));
      history.push('/winnerPage');
    });

    socket.on('client-startVoting', (game) => {
      const { playerVotingOne, playerVotingTwo } = game;
      this.setState({ playerVotingOne, playerVotingTwo });
    })

    socket.on('voting-done', (winner) => {
      const room = sessionStorage.getItem('room');
      this.setState({ winner });
      //timeout
      socket.emit('host-setPlayerNumbers', room);

    });
  }

  componentDidMount(){
    const game = JSON.parse(sessionStorage.getItem('game'));
    const meme = sessionStorage.getItem('meme');
    const { playerVotingOne, playerVotingTwo } = game;
    this.setState({ playerVotingOne, playerVotingTwo, meme });
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
      this.setState({ done: true });
    }
  }

  render(){
    const { playerVotingOne = {}, playerVotingTwo = {}, meme, seconds } = this.state;

    return(
      playerVotingOne && playerVotingTwo ?
      <div>
        <div className="container">
        <div className="side">
          <h1>Face off</h1>
          <p>Vote</p>
          <p>{ seconds }</p>
        </div>
        <div className="main">
            <img id='logo' src={ Logo }/>
            <MemeDisplay url = { meme } data = { playerVotingOne } number = '1'/>
            <h1 id='versus'>VS</h1>
            <MemeDisplay url = { meme } data = { playerVotingTwo } number = '2' />
            {/* <Vote /> */}
        </div>
      </div>
      </div>
      :
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
}

export default VotePage;
