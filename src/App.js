import React from 'react';
import './App.css';
import LibraryBox from './component/LibraryBox';
import ChessboardSquare from './component/ChessboardSquare';

const App = () => {
  const boxColors = ['red', 'green', 'blue', 'yellow'];

  const [chessboard, setChessboard] = React.useState(Array(64).fill(null));

  const handleDrop = (row, col , color) => {
    const targetIndex = row * 8 + col;
    const newChessboard = [...chessboard];
    newChessboard[targetIndex] = color; // Assuming you want to use the first color from the library
    setChessboard(newChessboard);
  };

  return (
    <div className="app">
      <div className="library">
        <h2>Library</h2>
        {boxColors.map((color, index) => (
          <LibraryBox key={index} color={color} />
        ))}
      </div>
      <div className="chessboard">
        {chessboard.map((color, index) => (
          <ChessboardSquare
            key={index}
            row={Math.floor(index / 8)}
            col={index % 8}
            onDrop={handleDrop}
          >
            {color && <LibraryBox color={color} />}
          </ChessboardSquare>
        ))}
      </div>
    </div>
  );
};

export default App;
