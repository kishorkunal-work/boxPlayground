import PropTypes from 'prop-types';
import React from 'react';
import { useDrag } from 'react-dnd';
import './CLLibraryBox.scss';

function CLLibraryBox({ item, size, backgroundColor }) {
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
		height: size * width + 'px',
		backgroundColor: backgroundColor,
		color: item.Color_FONT,
		opacity: isDragging ? '0.5' : '1',
	};

	return (
		<div
			ref={drag}
			className="CLLibraryBox-container"
			style={boxStyle}
		>
			<div className="CLLibraryBox-container-content">{item.Name}</div>
		</div>
	);
}

CLLibraryBox.propTypes = {
	backgroundColor: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	item: PropTypes.object.isRequired,
};

export default CLLibraryBox;
