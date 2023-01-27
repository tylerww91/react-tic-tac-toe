import { createContext, useState } from 'react';
// import Box from '../components/Box/Box.js';

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
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState();

  const spaceClick = (content, space, oldContent) => {
    console.log(content, space);
    if (!active) return;
    if (oldContent) return;
    setBoard((prevState) =>
      prevState.map((box) => {
        //spreading of the box object allows us to have access to the keys within
        return space === box.space ? { ...box, content } : box;
      })
    );
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

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
        spaceClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
