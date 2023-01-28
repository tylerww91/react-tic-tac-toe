import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function Status() {
  const { gameMessage, resetClick, resetState } = useContext(GameContext);

  return (
    <div>
      <p>{gameMessage}</p>
      <button onClick={() => resetClick(resetState)}>RESET</button>
    </div>
  );
}
