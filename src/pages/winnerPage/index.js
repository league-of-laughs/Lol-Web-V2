import React, { Component } from 'react';
import './style.scss'
import MemeDisplay from '../../components/memeDisplay';

class WinnerPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      winner: {} ,
      meme: null
    }
  }

  handlePress = () =>{
    const { history } = this.props;
    history.push('/');
  }

  componentDidMount(){
    const winner = JSON.parse(sessionStorage.getItem('winner'));
    console.log('winner')
    console.log(winner)
    const meme = sessionStorage.getItem('meme');

    this.setState({ winner, meme });
  }

  render(){
    const { winner, meme } = this.state;
    const { name } = winner;


    return(
      meme ? 
      <div>
        <div className="container">
        <div className="side">
          <h1>Winner!</h1>
          <p>{ name }</p>
          <button onClick={ this.handlePress }>Restart</button>
        </div>
        <div className="main">
            <MemeDisplay url={ meme } data={ winner } />
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

export default WinnerPage;