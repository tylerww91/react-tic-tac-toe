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
  const [gameMessage, setGameMessage] = useState(`X's Turn`);
  const [isReset, setIsReset] = useState(false);

  const spaceClick = (content, space, oldContent) => {
    if (!active) return;
    if (oldContent) return;
    setBoard((prevState) =>
      prevState.map((box) => {
        //spreading of the box object allows us to have access to the keys within
        return space === box.space ? { ...box, content } : box;
      })
    );
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setGameMessage(`${newPlayer}'s turn!`);
    setIsReset(false);
  };

  let newPlayer = currentPlayer;
  if (currentPlayer === 'X') newPlayer = 'O';
  if (currentPlayer === 'O') newPlayer = 'X';

  const resetState = [
    { space: '0', content: '' },
    { space: '1', content: '' },
    { space: '2', content: '' },
    { space: '3', content: '' },
    { space: '4', content: '' },
    { space: '5', content: '' },
    { space: '6', content: '' },
    { space: '7', content: '' },
    { space: '8', content: '' },
  ];

  const checkWinner = () => {
    if (
      board[0].content === board[1].content &&
      board[1].content === board[2].content &&
      board[0].content !== ''
    )
      return board[0].content;
    if (
      board[0].content === board[4].content &&
      board[4].content === board[8].content &&
      board[0].content !== ''
    )
      return board[0].content;
    if (
      board[3].content === board[4].content &&
      board[4].content === board[5].content &&
      board[3].content !== ''
    )
      return board[3].content;
    if (
      board[6].content === board[7].content &&
      board[7].content === board[8].content &&
      board[8].content !== ''
    )
      return board[8].content;
    if (
      board[0].content === board[3].content &&
      board[3].content === board[6].content &&
      board[6].content !== ''
    )
      return board[6].content;
    if (
      board[1].content === board[4].content &&
      board[4].content === board[7].content &&
      board[7].content !== ''
    )
      return board[7].content;
    if (
      board[2].content === board[5].content &&
      board[5].content === board[8].content &&
      board[8].content !== ''
    )
      return board[8].content;
    if (
      board[6].content === board[4].content &&
      board[4].content === board[2].content &&
      board[2].content !== ''
    )
      return board[2].content;
  };

  const isTie = () => {
    if (board.every((box) => box.content !== '')) return true;
  };

  const checkGameStatus = () => {
    if (!active) return;
    const winner = checkWinner();
    if (winner) {
      setGameMessage(`Player ${winner} Wins!`);
      setActive(false);
    } else if (isTie()) {
      setGameMessage('Cats Game!');
      setActive(false);
    }
  };

  checkGameStatus();

  const resetClick = (resetState) => {
    setIsReset(true);
    setTimeout(() => {
      setBoard(resetState);
      setActive(true);
      setCurrentPlayer('X');
      setGameMessage(`X's Turn`);
    }, 1400);
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
        checkWinner,
        resetState,
        resetClick,
        isReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
