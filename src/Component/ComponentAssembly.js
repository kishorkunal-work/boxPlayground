/* eslint-disable indent */
import React, { useContext } from 'react';
import PanelLibraryContext from '../Context/LibraryContext';
import CAEmptyBox from './CAEmptyBox';

const ComponentAssembly = () => {
	const context = useContext(PanelLibraryContext);
	const PanelAssemblyType = context.PanelAssemblyType;

	const pullDownArray = Array.from({ length: 40 }, (_, i) => i + 1);

	// const EmptyProjectAssembly = pullDownArray.map((i) => ({
	// 	assemblyLineName: `M${i}`,
	// 	assemblyLineItem: PanelAssemblyType,
	// }));

	// useEffect(() => {
	// 	context.setProjectAssemblyData(EmptyProjectAssembly);
	// }, [context.setProjectAssemblyData]);

	return (
		<div
			style={{
				border: '2px solid black',
				maxWidth: '55vw',
				overflowX: 'auto',
			}}
		>
			<table>
				<tbody>
					{PanelAssemblyType.map((groups, g_index) => {
						return (
							<>
								{groups.map((group, ia_index) => {
									return (
										<tr key={'EB_' + ia_index}>
											<td className="CAGroupItem_Box">{group.Name}</td>
											{pullDownArray.map((_, i_index) => {
												return (
													<td key={'EB_' + i_index}>
														<CAEmptyBox item={group} />
														{console.log({ groups, g_index, group, ia_index })}
														{PanelAssemblyType.length === g_index + 1 ? (
															<div
																style={{
																	textAlign: 'center',
																	fontSize: '10px',
																}}
															>
																M{i_index + 1}
															</div>
														) : (
															''
														)}
													</td>
												);
											})}
										</tr>
									);
								})}
							</>
						);
					})}
				</tbody>
			</table>

			<div></div>
		</div>
	);
};

export default ComponentAssembly;
