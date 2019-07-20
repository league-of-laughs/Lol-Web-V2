import React, { Component } from 'react';
import './style.scss'

class WinnerPage extends Component{
  constructor(props){
    super(props);
  }

  handlePress = () =>{
    const { history } = this.props;
    history.push('/');
  }

  render(){
    return(
      <div>
        <div className="container">
        <div className="side">
          <h1>Winner!</h1>
          <p>Tommy</p>
          <button onClick={ this.handlePress }>Restart</button>
        </div>
        <div className="main">
            
        </div>
      </div>
      </div>
    )
  }
}

export default WinnerPage;