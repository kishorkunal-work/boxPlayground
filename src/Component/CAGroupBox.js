import React from 'react';
import PropTypes from 'prop-types';
import CAGroupItem from './CAGroupItem';
import './CAGroupBox.scss';

function CAGroupBox({ group }) {
	return (
		<div className="CAGroupBox_container">
			{group.map((item, index) => {
				return (
					<CAGroupItem
						key={'GI_' + index}
						item={item}
					/>
				);
			})}
		</div>
	);
}
CAGroupBox.propTypes = {
	group: PropTypes.array.isRequired,
};
export default CAGroupBox;
