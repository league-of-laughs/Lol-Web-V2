import React, { Component }  from 'react';
import Logo from '../../assets/logo.png';
import Vote from '../../components/vote';
import './style.scss';

class VotePage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="container">
        <div className="side">
          <h1>Face off</h1>
          <p>Vote</p>
          <p>58</p>
        </div>
        <div id="voteMain" className="main">
            <img id='logo' src={ Logo }/>
            <Vote />
            <h1 id='versus' >VS</h1>
            <Vote />
        </div>
      </div>
      </div>
    )
  }
}

export default VotePage;
