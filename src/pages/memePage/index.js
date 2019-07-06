import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import pickMeme from '../../utils/meme';

class MemePage extends Component{
  constructor(props){
    super(props);

    this.state = {
      meme: null
    }
  }

  componentDidMount(){
    const meme = pickMeme();
    this.setState({ meme });
  }

  render(){
    const { meme } = this.state;
    return(
      <div className="container">
        <div className="side">
          <h1>Current Meme</h1>
          <p>Fill in the captions</p>
          <p>58</p>
        </div>
        <div className="main">
          <div className="top">
            <img src={ Logo }/>
          </div>
          <img src={ meme } id="memeImg"/>
        </div>
      </div>
    )
  }
}

export default MemePage;