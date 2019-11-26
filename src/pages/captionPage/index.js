import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class CaptionPage extends Component{
  constructor(props){
    super(props);
  }

  handleClick = () => {
    const { history } = this.props;

    history.push('/playerVotePage');
  }

  render(){
    return(
      <div>
        <div className='header'>
          <img src={ Logo }/>
          <h2>Fill out the meme</h2>
        </div>
        <div className='containerPlayer'>
          <input placeholder='Top Caption'/>
          <input placeholder='Bottom Caption'/>
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
}

export default CaptionPage;