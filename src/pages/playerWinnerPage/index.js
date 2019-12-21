import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class PlayerWinnerPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      winner: null
    }
  }

  handleClick = () => {
    const { history } = this.props;

    history.push('/joinGame');
  }

  componentDidMount(){
    const winner = sessionStorage.getItem('winner');

    this.setState({ winner });
  }

  render(){
    const { winner } = this.state;

    return(
      <div>
        <div className='header'>
          <img src={ Logo }/>
          <h2></h2>
        </div>
        <div className='containerPlayer'>
          <div>
            <h1>Winner!</h1>
            <p style={{textAlign: 'center'}}>{winner}</p>
          </div>
          <button onClick={ this.handleClick }>Join New Game</button>
        </div>
      </div>
    );
  }
}

export default PlayerWinnerPage;