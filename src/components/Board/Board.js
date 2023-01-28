import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Box from '../Box/Box.js';
import './Board.css';

export default function Board() {
  const { board } = useContext(GameContext);
  return (
    <main className="main">
      <div className="board-container">
        {board.map(({ content, space }) => (
          <Box key={space} {...{ content, space }} />
        ))}
      </div>
    </main>
  );
}
