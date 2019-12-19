import React, { Component }  from 'react';
import Logo from '../../assets/logo.png';
import Vote from '../../components/vote';
import './style.scss';

class VotePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      winner: null,
      playerOne: null,
      playerTwo: null
    }

    const { socket, history } = this.props;

    socket.on('game-over', (winner) => {
      localStorage.setItem('winner', winner);
      history.push('/winnerPage');
    });

    socket.on('voting-done', (winner) => {
      this.setState({ winner });
    });
  }

  componentDidMount(){
    const game = JSON.parse(localStorage.getItem('game'));
    console.log(game)
  }

  render(){
    const { playerOne, playerTwo } = this.state;

    return(
      playerOne && playerTwo ?
      <div>
        <div className="container">
        <div className="side">
          <h1>Face off</h1>
          <p>Vote</p>
          <p>58</p>
        </div>
        <div id="voteMain" className="main">
            <img id='logo' src={ Logo }/>
            <Vote />
            <h1 id='versus'>VS</h1>
            <Vote />
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
