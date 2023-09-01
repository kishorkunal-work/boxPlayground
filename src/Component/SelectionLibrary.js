import React, { useContext } from 'react';
import CLLibraryBox from './CLLibraryBox';
import PanelLibraryContext from '../Context/LibraryContext';

const SelectionLibrary = () => {
	const context = useContext(PanelLibraryContext);

	return (
		<table>
			<thead>
				<tr>
					<td className="bg-amber-200"></td>
					<td className="text-xs text-center bg-fuchsia-200">STANDARD</td>
					<td className="text-xs text-center bg-sky-200">NON STANDARD</td>
				</tr>
			</thead>
			<tbody>
				{context.Library_Box.map((category) => (
					<tr
						key={category.CategoryName}
						className="border-b-2 border-r-2 border-black"
					>
						<td className="bg-amber-200">{category.CategoryName}</td>
						<td className="text-center bg-fuchsia-200">
							{category.Items.filter((item) => item.IsStandard).map((item) => (
								<div
									key={item.Name}
									className="center-align"
								>
									<CLLibraryBox
										backgroundColor={category.Color_BG}
										size={category.Size}
										item={item}
									/>
								</div>
							))}
						</td>
						<td className="bg-sky-200">
							<div className="center-align">
								{category.Items.filter((item) => !item.IsStandard).map(
									(item) => (
										<CLLibraryBox
											key={item.Name}
											backgroundColor={category.Color_BG}
											size={category.Size}
											item={item}
										/>
									)
								)}
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SelectionLibrary;
