import PropTypes from 'prop-types';
import React from 'react';
import './CADroppedBox.scss';

function CADroppedBox({ item }) {
	const width = 30;
	const boxStyle = {
		width: width + 'px',
		height: item.Size * width + 'px',
		backgroundColor: item.Color_BG,
		color: item.Color_FONT,
	};

	return (
		<div
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
