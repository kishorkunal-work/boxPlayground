import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CAEmptyBox.scss';
import { useDrop } from 'react-dnd';
import CADroppedBox from './CADroppedBox';
import { ItemType } from '../constants';

function CAEmptyBox({ item }) {
	const [droppedItem, setDroppedItem] = useState(null);
	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept: [item.Accepts, ItemType.MISCELLENEOUS],
		drop: (item) => {
			console.log('Dropped item:', item);
			if (!droppedItem) {
				setDroppedItem(item);
			}
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const width = 30;
	const boxStyle = {
		width: width + 'px',
		height: item.size * width + 'px',
		opacity: canDrop === false ? '0.5' : '1',
		backgroundColor: isOver ? '#ff0000' : item.Color,
	};

	return (
		<div
			ref={drop}
			className="CAEmptyBox"
			style={boxStyle}
		>
			{droppedItem ? (
				<CADroppedBox
					backgroundColor={droppedItem.Color_BG}
					size={droppedItem.Size}
					item={droppedItem}
				/>
			) : (
				''
			)}
		</div>
	);
}

CAEmptyBox.propTypes = {
	item: PropTypes.object.isRequired,
};
export default CAEmptyBox;
