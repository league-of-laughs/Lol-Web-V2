import React from 'react';
import pickMeme from '../../utils/meme';
import './style.scss';

export default (props) => {
  return(
    <div className = "voteComponent">
      <img src = {pickMeme()}/>
      <h1>1</h1>
    </div>
  )
}