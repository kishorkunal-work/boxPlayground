import React, { useState } from 'react';
import './App.scss';
import PanelAssembly from './Component/PanelAssembly';
import Data from './Helper/constants';
import PanelLibraryContext from './Context/LibraryContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
	const [ProjectAssemblyData, setProjectAssemblyData] = useState([]);

	// const Library_Box = Data.Library_Casing_Block_BoxTypes;
	// const [PanelAssemblyType, setPanelAssemblyType] = useState(
	// 	Data.Panel_Casing_Block_AssemblyType
	// );

	const Library_Box = Data.Library_Strong_Block_BoxTypes;
	const [PanelAssemblyType, setPanelAssemblyType] = useState(
		Data.Panel_Strong_Block_AssemblyType
	);

	// const Library_Box = Data.Library_Tank_BoxTypes;
	// const [PanelAssemblyType, setPanelAssemblyType] = useState(
	// 	Data.Panel_Tank_AssemblyType
	// );

	Library_Box.forEach((type) => {
		type.Items.forEach((item) => {
			item.Type = type.CategoryName;
			item.Color_BG = type.Color_BG;
			item.Size = type.Size;
		});
	});

	return (
		<DndProvider backend={HTML5Backend}>
			<PanelLibraryContext.Provider
				value={{
					PanelAssemblyType,
					setPanelAssemblyType,
					ProjectAssemblyData,
					setProjectAssemblyData,
					Library_Box,
				}}
			>
				<PanelAssembly />
			</PanelLibraryContext.Provider>
		</DndProvider>
	);
};
export default App;
