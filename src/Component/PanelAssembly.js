import React from 'react';
import ComponentAssembly from './ComponentAssembly';
import SelectionLibrary from './SelectionLibrary';

function PanelAssembly() {
	return (
		<div className="flex m-5">
			<div className="flex-2 m-5">
				<SelectionLibrary />
			</div>
			<div className="flex-auto m-5">
				<ComponentAssembly />
			</div>
		</div>
	);
}
export default PanelAssembly;
