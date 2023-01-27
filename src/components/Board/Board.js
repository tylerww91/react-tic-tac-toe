import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Box from '../Box/Box.js';
import './Board.css';

export default function Board() {
  const { board, setBoard } = useContext(GameContext);
  return (
    <main className="main">
      <div className="board-container">
        {board.map((box, i) => (
          <Box key={i} {...{ box }} />
        ))}
      </div>
    </main>
  );
}
