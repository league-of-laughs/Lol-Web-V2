import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class PlayerVotePage extends Component{
  constructor(props){
    super(props);
  }

  handleClick = () => {
    const { history } = this.props;

    history.push('/playerWinnerPage');
  }

  render(){
    return(
      <div>
        <div className='header'>
          <img src={ Logo }/>
          <h2>Vote</h2>
        </div>
        <div className='containerPlayer'>
          <button onClick={this.handleClick}>1</button>
          <button onClick={this.handleClick}>2</button>
        </div>
      </div>
    );
  }
}

export default PlayerVotePage;