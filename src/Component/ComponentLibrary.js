import React from 'react';
import CLLibraryBox from './CLLibraryBox';
import { LibraryBoxTypes, COLOR_CODE } from '../constants';

const ComponentLibrary = () => {
	LibraryBoxTypes.forEach((type) => {
		type.Items.forEach((item) => {
			item.Type = type.CategoryName;
		});
	});

	return (
		<div style={{ border: '2px solid black', marginRight: '10px' }}>
			<div style={{ display: 'flex', textAlign: 'center' }}>
				<div style={{ flex: '2', backgroundColor: COLOR_CODE.YELLOW_BG }}></div>
				<div style={{ flex: '1', backgroundColor: COLOR_CODE.PINK_BG }}>
					<span style={{ fontSize: '8px' }}>STANDARD</span>
				</div>
				<div style={{ flex: '4', backgroundColor: COLOR_CODE.BLUE_BG }}>
					<span style={{ fontSize: '8px' }}>NON-STANDARD</span>
				</div>
			</div>
			{LibraryBoxTypes.map((type, index) => {
				return (
					<div
						key={'LB' + index}
						style={{
							display: 'flex',
							textAlign: 'center',
							borderBottom: '2px solid black',
						}}
					>
						<div style={{ flex: '2', backgroundColor: COLOR_CODE.YELLOW_BG }}>
							{type.CategoryName}
						</div>
						<div
							style={{
								flex: '1',
								backgroundColor: COLOR_CODE.PINK_BG,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							{type.Items.filter((k) => k.IsStandard).map(
								(item, item_index) => {
									return (
										<CLLibraryBox
											key={'LB' + item_index}
											backgroundColor={type.Color_BG}
											size={type.Size}
											item={item}
										/>
									);
								}
							)}
						</div>
						<div
							style={{
								flex: '4',
								backgroundColor: COLOR_CODE.BLUE_BG,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							{type.Items.filter((k) => !k.IsStandard).map(
								(item, item_index) => {
									return (
										<CLLibraryBox
											key={'LB' + item_index}
											backgroundColor={type.Color_BG}
											size={type.Size}
											item={item}
										/>
									);
								}
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ComponentLibrary;
