import React, { useContext } from 'react';
import ComponentAssembly from './ComponentAssembly';
import SelectionLibrary from './SelectionLibrary';

function PanelAssembly() {
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: '2' }}>
				<SelectionLibrary />
			</div>
			<div style={{ flex: '3', maxWidth: '55vw', overflowX: 'auto' }}>
				<ComponentAssembly />
			</div>
		</div>
	);
}
export default PanelAssembly;
