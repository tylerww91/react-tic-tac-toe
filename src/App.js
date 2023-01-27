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

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
