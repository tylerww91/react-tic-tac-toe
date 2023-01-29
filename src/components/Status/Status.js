import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import reset from '../../restart.png';
import './Status.css';

export default function Status() {
  const { gameMessage, resetClick, resetState, active } = useContext(GameContext);

  return (
    <div>
      <p>{gameMessage}</p>
      <button className={`${active}`} onClick={() => resetClick(resetState)}>
        <img src={reset}></img>
      </button>
    </div>
  );
}
