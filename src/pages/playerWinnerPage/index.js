import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class PlayerWinnerPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      winner: {}
    }
  }

  handleClick = () => {
    const { history } = this.props;

    history.push('/joinGame');
  }

  async componentDidMount(){
    console.log('this is winner');
    const winner = await JSON.parse(sessionStorage.getItem('winner'));
    console.log(winner)

    this.setState({ winner });
  }

  render(){
    const { winner } = this.state;
    const { name } = winner;
    return(
      <div>
        <div className='header'>
          <img src={ Logo }/>
          <h2></h2>
        </div>
        <div className='containerPlayer'>
          <div>
            <h1>Winner!</h1>
            <p style={{textAlign: 'center'}}>{ name }</p>
          </div>
          <button onClick={ this.handleClick }>Join New Game</button>
        </div>
      </div>
    );
  }
}

export default PlayerWinnerPage;