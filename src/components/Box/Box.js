import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function Box({ content, space }) {
  const { spaceClick, currentPlayer } = useContext(GameContext);
  return <div className={content} onClick={() => spaceClick(currentPlayer, space, content)}></div>;
}
