import React from 'react';
import PropTypes from 'prop-types';
import './CAEmptyBox.scss';

function CAEmptyBox({ color, size }) {
	const width = 30;
	const boxStyle = {
		width: width + 'px',
		height: size * width + 'px',
		backgroundColor: color,
	};

	return (
		<div
			className="CAEmptyBox"
			style={boxStyle}
		></div>
	);
}

CAEmptyBox.propTypes = {
	color: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
};
export default CAEmptyBox;
