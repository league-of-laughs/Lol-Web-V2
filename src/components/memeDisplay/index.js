import React from 'react';
import './style.scss';

const MemeDisplay = (props) => {
  const { url, data, number } = props;
  const { currentMeme } = data;
  const { topText, bottomText } = currentMeme;

  return(
    <div className = 'memeContainer'>
      <div className='topText'>
        <h1>{topText}</h1>
      </div>
      <img src={ url }/>
      <div className='bottomText'>
        <h1>{ bottomText }</h1>
      </div>
    </div>
  )
}

export default MemeDisplay;