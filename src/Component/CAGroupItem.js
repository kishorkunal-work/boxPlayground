import React from 'react';
import PropTypes from 'prop-types';
import CAEmptyBox from './CAEmptyBox';
import './CAGroupItem.scss';
import Data from '../Helper/constants';

function CAGroupItem({ item }) {
	const ItemPullDownNumber = 40;
	const pullDownArray = Array.from(
		{ length: ItemPullDownNumber },
		(_, i) => i + 1
	);
	return (
		<div className="CAGroupItem_container">
			<div className="CAGroupItem_Box">{item.Name}</div>
			{pullDownArray.map((_, index) => {
				return (
					<div key={'EB_' + index}>
						<CAEmptyBox item={item} />
						{item.Accepts === Data.ItemType.CEILING_FILTER_FRAME ? (
							<div style={{ textAlign: 'center', fontSize: '10px' }}>
								M{index + 1}
							</div>
						) : (
							''
						)}
					</div>
				);
			})}
		</div>
	);
}
CAGroupItem.propTypes = {
	item: PropTypes.object.isRequired,
};
export default CAGroupItem;
