/* eslint-disable indent */
import React, { useContext, useEffect } from 'react';
import CAGroupBox from './CAGroupBox';
import PanelLibraryContext from '../Context/LibraryContext';

const ComponentAssembly = () => {
	const context = useContext(PanelLibraryContext);
	const PanelAssemblyType = context.PanelAssemblyType;

	const pullDownArray = Array.from({ length: 40 }, (_, i) => i + 1);

	const EmptyProjectAssembly = pullDownArray.map((i) => ({
		assemblyLineName: `M${i}`,
		assemblyLineItem: PanelAssemblyType,
	}));

	useEffect(() => {
		context.setProjectAssemblyData(EmptyProjectAssembly);
	}, [context.setProjectAssemblyData]);

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
