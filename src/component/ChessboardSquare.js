import React from 'react';
import { useDrop } from 'react-dnd';

const ChessboardSquare = ({ row, col, onDrop, children }) => {
  const [, drop] = useDrop({
    accept: 'BOX',
    drop: (item) => onDrop(row, col, item.color),
  });

  return (
    <div ref={(node) => drop(node)} className="chess-cell">
      {children}
    </div>
  );
};

export default ChessboardSquare;
