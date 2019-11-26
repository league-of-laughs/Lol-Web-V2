import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class JoinGame extends Component{
  constructor(props){
    super(props);
  }

  handleClick = () => {
    const { history } = this.props;

    history.push('/captionPage');
  }

  render(){
    return(
      <div>
        <div className='header'>
          <img src={ Logo }/>
        </div>
        <div className='containerPlayer'>
          <input placeholder='Room Code'/>
          <input placeholder='Name'/>
          <button onClick={this.handleClick}>Join Game</button>
        </div>
      </div>
    )
  }
}

export default JoinGame;