import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './CAEmptyBox.scss';
import { useDrop } from 'react-dnd';
import CADroppedBox from './CADroppedBox';
import Data from '../Helper/constants';
import PanelLibraryContext from '../Context/LibraryContext';

function CAEmptyBox({ item }) {
	const context = useContext(PanelLibraryContext);
	let acceptArr = [];

	if (Array.isArray(item.Accepts)) {
		acceptArr = [...item.Accepts, Data.ItemType.MISCELLENEOUS];
	} else {
		acceptArr = [item.Accepts, Data.ItemType.MISCELLENEOUS];
	}

	const [droppedItem, setDroppedItem] = useState(null);
	const [{ isOver }, drop] = useDrop(() => ({
		accept: acceptArr,
		drop: dropHandler,
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const width = 30;
	const boxStyle = {
		width: width + 'px',
		height: item.size * width + 'px',
		// opacity: canDrop === false ? '0.5' : '1',
		backgroundColor: isOver ? '#ff0000' : item.Color,
	};

	function dropHandler(dItem) {
		console.log('Dropped item:', dItem);
		console.log('prop item:', item);
		if (!droppedItem) {
			const it = {
				type: dItem.Type,
				placement: item.Name,
				isStandard: dItem.IsStandard,
				name: dItem.Name,
				assemblyLine: 'M1',
			};
			console.log(context);
			setDroppedItem(dItem);
		}
	}

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
