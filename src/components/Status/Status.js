import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Status.css';

export default function Status() {
  const { gameMessage, resetClick, resetState, active } = useContext(GameContext);

  return (
    <div>
      <p>{gameMessage}</p>
      <button className={`${active}`} onClick={() => resetClick(resetState)}>
        RESET
      </button>
    </div>
  );
}
