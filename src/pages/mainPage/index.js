import React, { Component } from 'react';
import './style.scss';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (type) => {
    console.log(type);
    const { history } = this.props;

    type === 'host' ? history.push('/startPage') : history.push('/joinGame')
  }

  render() {
    return(
      <div className='mainContainer'>
        <div className='inner'>
          <button onClick={ () => this.handleClick('host') }>Host Game</button>
          <button onClick={ () => this.handleClick('join') }>Join Game</button>
        </div>
      </div>
    )
  }
};

export default MainPage