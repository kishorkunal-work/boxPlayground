/* eslint-disable indent */
import React, { useState } from 'react';
import './App.scss';
import PanelAssembly from './Component/PanelAssembly';
import Data from './Helper/constants';
import PanelLibraryContext from './Context/LibraryContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useLocation } from 'react-router-dom';

const App = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	// To access a specific query parameter:
	const paramValue = queryParams.get('type');
	const [ProjectAssemblyData, setProjectAssemblyData] = useState([]);

	const Library_Casing_Block_BoxTypes = Data.Library_Casing_Block_BoxTypes;
	const [Panel_Casing_Block_AssemblyType, setPanel_Casing_Block_AssemblyType] =
		useState(Data.Panel_Casing_Block_AssemblyType);

	const Library_Strong_Block_BoxTypes = Data.Library_Strong_Block_BoxTypes;
	const [Panel_Strong_Block_AssemblyType, setPanel_Strong_Block_AssemblyType] =
		useState(Data.Panel_Strong_Block_AssemblyType);

	const Library_Tank_BoxTypes = Data.Library_Tank_BoxTypes;
	const [Panel_Tank_AssemblyType, setPanel_Tank_AssemblyType] = useState(
		Data.Panel_Tank_AssemblyType
	);

	let Library_Box, PanelAssemblyType, setPanelAssemblyType;
	switch (paramValue) {
		case '3':
			Library_Box = Library_Tank_BoxTypes;
			PanelAssemblyType = Panel_Tank_AssemblyType;
			setPanelAssemblyType = setPanel_Tank_AssemblyType;
			break;
		case '2':
			Library_Box = Library_Strong_Block_BoxTypes;
			PanelAssemblyType = Panel_Strong_Block_AssemblyType;
			setPanelAssemblyType = setPanel_Strong_Block_AssemblyType;
			break;
		case '1':
		default:
			Library_Box = Library_Casing_Block_BoxTypes;
			PanelAssemblyType = Panel_Casing_Block_AssemblyType;
			setPanelAssemblyType = setPanel_Casing_Block_AssemblyType;
			break;
	}

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
