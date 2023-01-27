import { useContext } from 'react';
import './App.css';
import Board from './components/Board/Board.js';
import { GameContext } from './context/GameContext.js';

function App() {
  const {
    active,
    setActive,
    currentPlayer,
    setCurrentPlayer,
    gameMessage,
    setGameMessage,
    board,
    setBoard,
  } = useContext(GameContext);

  console.log(
    active,
    setActive,
    currentPlayer,
    setCurrentPlayer,
    gameMessage,
    setGameMessage,
    board,
    setBoard
  );

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
