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
    }

    const { socket, history } = this.props;

    socket.on('game-over', (winner) => {
      sessionStorage.setItem('winner', winner);
      history.push('/winnerPage');
    });

    socket.on('voting-done', (winner) => {
      this.setState({ winner });
    });
  }

  componentDidMount(){
    const game = JSON.parse(sessionStorage.getItem('game'));
    const meme = sessionStorage.getItem('meme');
    console.log('this is game')
    console.log(game)

    const { playerVotingOne, playerVotingTwo } = game;
    this.setState({ playerVotingOne, playerVotingTwo, meme });
  }

  render(){
    const { playerVotingOne = {}, playerVotingTwo = {}, meme } = this.state;
    // const { currentMeme: meme1 } = playerVotingOne;
    // const { currentMeme: meme2 } = playerVotingTwo;

    return(
      playerVotingOne && playerVotingTwo ?
      <div>
        <div className="container">
        <div className="side">
          <h1>Face off</h1>
          <p>Vote</p>
          <p>58</p>
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
