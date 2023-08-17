import React from 'react';
import { useDrag } from 'react-dnd';

const LibraryBox = ({ color }) => {
  const [, drag] = useDrag({
    type: 'BOX',
    item: { color },
  });

  return <div ref={drag} className="box" style={{ backgroundColor: color }} />;
};

export default LibraryBox;
