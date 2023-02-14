import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Box from '../Box/Box.js';
import './Board.css';

export default function Board() {
  const { board, isReset } = useContext(GameContext);
  return (
    <main className="main">
      <div className={`board-container ${isReset}-anim`}>
        {board.map(({ content, space }) => (
          <Box key={space} {...{ content, space }} />
        ))}
      </div>
    </main>
  );
}
