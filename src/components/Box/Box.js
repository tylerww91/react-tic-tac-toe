import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function Box({ content, space }) {
  const { spaceClick, currentPlayer } = useContext(GameContext);
  console.log(content);

  const whatSymbol = (content) => {
    if (content === 'X') content ? 'X' : '';
    if (content === 'O') content ? 'O' : '';
    if (!content) return '';
  };

  return (
    <div
      //if content is set to X / content isn't '' return X otherwise O
      className={content}
      // className={content === 'X' && content !== '' ? 'X' : 'O'}
      onClick={() => spaceClick(currentPlayer, space, content)}
    ></div>
  );
}
