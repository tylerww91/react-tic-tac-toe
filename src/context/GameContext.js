import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: '0', content: '' },
    { space: '1', content: '' },
    { space: '2', content: '' },
    { space: '3', content: '' },
    { space: '4', content: '' },
    { space: '5', content: '' },
    { space: '6', content: '' },
    { space: '7', content: '' },
    { space: '8', content: '' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [active, setActive] = useState();
  const [gameMessage, setGameMessage] = useState();

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        board,
        setBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
