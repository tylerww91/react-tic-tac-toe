import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: '', content: '' },
    { space: '', content: '' },
    { space: '', content: '' },
    { space: '', content: '' },
    { space: '', content: '' },
    { space: '', content: '' },
    { space: '', content: '' },
    { space: '', content: '' },
    { space: '', content: '' },
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
