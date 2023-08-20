/* eslint-disable indent */
import React from 'react';
import CAGroupBox from './CAGroupBox';
import { PanelAssemblyType } from '../constants';

const ComponentAssembly = () => {
	return (
		<div style={{ border: '2px solid black' }}>
			{PanelAssemblyType.map((group, index) => {
				return (
					<div
						key={'GB_' + index}
						style={{
							borderBottom: index === 2 || index === 3 ? '2px solid black' : '',
						}}
					>
						<CAGroupBox group={group} />
					</div>
				);
			})}
		</div>
	);
};

export default ComponentAssembly;
