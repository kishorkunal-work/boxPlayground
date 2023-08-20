import React from 'react';
import ComponentAssembly from './ComponentAssembly';
import ComponentLibrary from './ComponentLibrary';

function PanelAssembly() {
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: '2' }}>
				<ComponentLibrary />
			</div>
			<div style={{ flex: '3' }}>
				<ComponentAssembly />
			</div>
		</div>
	);
}
export default PanelAssembly;
