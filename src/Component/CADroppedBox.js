import PropTypes from 'prop-types';
import React from 'react';
import './CADroppedBox.scss';
import { useDrag } from 'react-dnd';

function CADroppedBox({ item }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: item.Type ? item.Type : '',
		item: item,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	const width = 30;
	const boxStyle = {
		width: width + 'px',
		height: item.Size * width + 'px',
		backgroundColor: item.Color_BG,
		color: item.Color_FONT,
		opacity: isDragging ? '0.5' : '1',
	};

	return (
		<div
			ref={drag}
			className="CADroppedBox-container"
			style={boxStyle}
		>
			<div className="CADroppedBox-container-content">{item.Name}</div>
		</div>
	);
}

CADroppedBox.propTypes = {
	item: PropTypes.object.isRequired,
};

export default CADroppedBox;
