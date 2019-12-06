import React, { Component } from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

class CaptionPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      waiting: false,
      top: null,
      bottom: null
    }
  }

  handleClick = () => {
    const { history, socket } = this.props;

    const { top, bottom } = this.state;
    const name = localStorage.getItem('name');
    const room = localStorage.getItem('room');

    const data = { name, top, bottom }

    socket.emit('client-uploadMeme', { room, data });

    this.setState({ waiting: true });
    //history.push('/playerVotePage');
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render(){
    const { waiting } = this.state;

    return(
      waiting ? 
      <div>
        <h1>Waiting for other players</h1>
      </div>
      :
      <div>
        <div className='header'>
          <img src={ Logo }/>
          <h2>Fill out the meme</h2>
        </div>
        <div className='containerPlayer'>
          <input name='top' onChange={this.handleChange} placeholder='Top Caption'/>
          <input name='bottom' onChange={this.handleChange} placeholder='Bottom Caption'/>
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
}

export default CaptionPage;