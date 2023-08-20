import React from 'react';
import PropTypes from 'prop-types';
import CAEmptyBox from './CAEmptyBox';
import './CAGroupItem.scss';

function CAGroupItem({ item }) {
	const ItemPullDownNumber = 25;
	const pullDownArray = Array.from(
		{ length: ItemPullDownNumber },
		(_, i) => i + 1
	);
	return (
		<div className="CAGroupItem_container">
			<div className="CAGroupItem_Box">{item.Name}</div>
			{pullDownArray.map((_, index) => {
				return (
					<CAEmptyBox
						key={'EB_' + index}
						color={item.Color}
						size={item.size}
						item={item}
					/>
				);
			})}
		</div>
	);
}
CAGroupItem.propTypes = {
	item: PropTypes.object.isRequired,
};
export default CAGroupItem;
