import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Board.css';

export default function Board() {
  const { board, setBoard } = useContext(GameContext);
  return (
    <main className="main">
      <div className="board-container">{/* {board.map((box))} */}</div>
    </main>
  );
}
