/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import data from '../locales/en.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEdit,
	faTrash,
	faFileExport,
	faEye,
} from '@fortawesome/free-solid-svg-icons';
import NavHeader from '../Component/NavHeader';

function ProjectList() {
	const ProjectStatus = {
		NOT_SAVED: 'NOT_SAVED',
		OPEN: 'OPEN',
		CLOSED: 'CLOSED',
		PROCESSING: 'PROCESSING',
	};

	const ComponentLibraryType = {
		INDIVIDUAL_EQUIPMENT_WISE: 'Individual Equipment Wise',
		COMMON_FOR_ALL: 'Common for All',
	};

	const projects = [
		{
			code: 'TM-801',
			facilityCode: 'OEE',
			name: '',
			drawingCode: 'SMGC',
			componentLibraryType: ComponentLibraryType.INDIVIDUAL_EQUIPMENT_WISE,
			clientName: 'Suzuki Motor Gujarat',
			facilityName: 'ED Oven',
			plantName: 'Gujarat Plant',
			status: ProjectStatus.OPEN,
			screenshot: '',
			layout: [],
			designSpecification: '',
			modules: [],
			lastModifiedDate: '2023-08-30',
			createdDate: '2023-08-30',
			lastModifiedBy: 'Kishor Kunal',
			createdBy: 'Kishor Kunal',
		},
		{
			code: 'TM-802',
			facilityCode: 'OEE2',
			name: '',
			drawingCode: 'SMGC2',
			componentLibraryType: ComponentLibraryType.INDIVIDUAL_EQUIPMENT_WISE,
			clientName: 'Suzuki Motor Gujarat2',
			facilityName: 'ED Oven2',
			plantName: 'Gujarat Plant2',
			status: ProjectStatus.OPEN,
			screenshot: '',
			layout: [],
			designSpecification: '',
			modules: [],
			lastModifiedDate: '2023-08-29',
			createdDate: '2023-08-29',
			lastModifiedBy: 'Kishor Kunal2',
			createdBy: 'Kishor Kunal2',
		},
	];

	function createProject() {
		alert('onclick project');
	}

	return (
		<>
			<NavHeader />
			<div>
				<div className="mb-5 flex flex-col flex-wrap items-start">
					<button
						title="Create New Project"
						type="button"
						className="button"
						onClick={createProject}
					>
						<button name="Create Project">+</button>
						<span>{data.pages.projects.buttons.new_project}</span>
					</button>
				</div>
				<div className="mb-5 flex flex-col flex-wrap">
					<span className="text-sm font-semibold text-gray-500">
						{data.pages.common.labels.filters}
					</span>
					<table className="">
						<tbody>
							<tr>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.application.domain.project_code}
										</div>
										<input
											v-model="filters['code.contains']"
											className="form-field w-full"
											type="text"
											placeholder="Enter project code"
										/>
									</div>
								</td>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.application.domain.facility_code}
										</div>
										<input
											v-model="filters['facilityCode.contains']"
											className="form-field w-full"
											type="text"
											placeholder={data.pages.projects.labels.ph_facility_code}
										/>
									</div>
								</td>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.application.domain.project_name}
										</div>
										<input
											v-model="filters['name.contains']"
											className="form-field w-full"
											type="text"
											placeholder={data.pages.projects.labels.ph_project_name}
										/>
									</div>
								</td>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.application.domain.client_name}
										</div>
										<input
											v-model="filters['clientName.contains']"
											className="form-field w-full"
											type="text"
											placeholder={data.pages.projects.labels.ph_client_name}
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.application.domain.facility_name}
										</div>
										<input
											v-model="filters['facilityName.contains']"
											className="form-field w-full"
											type="text"
											placeholder={data.pages.projects.labels.ph_facility_name}
										/>
									</div>
								</td>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.application.domain.plant_name}
										</div>
										<input
											v-model="filters['plantName.contains']"
											className="form-field w-full"
											type="text"
											placeholder={data.pages.projects.labels.ph_plant_name}
										/>
									</div>
								</td>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.pages.common.labels.status}
										</div>
										<select
											v-model="filters['status.equals']"
											className="form-field w-full"
										>
											<option
												value=""
												selected
											>
												{data.pages.common.labels.all}
											</option>
											<option
												value="PROCESSING"
												selected
											>
												{data.pages.projects.labels.processing}
											</option>
											<option
												value="OPEN"
												selected
											>
												{data.pages.projects.labels.open}
											</option>
											<option value="CLOSED">
												{data.pages.projects.labels.closed}
											</option>
										</select>
									</div>
								</td>
								<td className="td">
									<div>
										<div className="text-xs m-2 text-gray-700">
											{data.pages.common.labels.action}
										</div>
										<button
											title="Filter"
											type="button"
											className="button w-full"
											onClick="filter"
										>
											<icon-filter />
											<span>{data.pages.common.labels.filter}</span>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="mt-4 flex items-center justify-between">
					<div className="text-sm font-semibold text-gray-500">
						{data.pages.projects.labels.projects}
					</div>
					<div className="flex space-x-3"></div>
				</div>
				<div className="zebra mt-2">
					<table className="w-full">
						<thead className="border-b border-t">
							<tr>
								<th
									scope="col"
									className="th"
								>
									S. No.
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.application.domain.project_code}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.application.domain.facility_code}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.application.domain.project_name}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.application.domain.client_name}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.application.domain.facility_name}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.application.domain.plant_name}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.pages.common.labels.status}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.pages.common.labels.last_updated}
								</th>
								<th
									scope="col"
									className="th"
								>
									{data.pages.common.labels.actions}
								</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project, index) => {
								return (
									<tr
										key={index + '11'}
										className="border-b"
									>
										<td className="td">{index + 1}</td>
										<td className="td">{project.code}</td>
										<td className="td">{project.facilityCode}</td>
										<td className="td">{project.name}</td>
										<td className="td">{project.clientName}</td>
										<td className="td">{project.facilityName}</td>
										<td className="td">{project.plantName}</td>
										<td className="td">{project.status}</td>
										<td className="td">{project.lastModifiedDate}</td>
										<td className="td">
											<div className="flex space-x-3">
												<div
													className="flex space-x-3"
													v-if="project.status != 'CLOSED'"
												>
													<FontAwesomeIcon
														icon={faEdit}
														class="w-6 h-6 cursor-pointer"
														onClick="editProject(project.code, project.facilityCode)"
													/>
													<FontAwesomeIcon
														icon={faEye}
														class="w-6 h-6 cursor-pointer"
														onClick="viewFileList(project.code, project.facilityCode)"
													/>
													<FontAwesomeIcon
														icon={faFileExport}
														class="w-6 h-6 cursor-pointer"
														onClick="exportProjectSummary(project.code, project.facilityCode)"
													/>
													<FontAwesomeIcon
														icon={faTrash}
														class="w-6 h-6 cursor-pointer"
														onClick="confirmDeleteProject(project.code, project.facilityCode)"
													/>
												</div>

												<button
													v-if="applicationStore.isAdmin && project.status != 'PROCESSING'"
													type="button"
													title={data.pages.projects.labels.change_status_title}
												>
													{/* <IconChangeStatus
													class="w-6 h-6 cursor-pointer"
													onClick="onProjectStatusChangeRequested(
																	project.code,
																	project.facilityCode,
																	project.status
																	)"
												/> */}
												</button>
											</div>
										</td>
									</tr>
								);
							})}

							<template v-else>
								<tr className="border-b">
									<td
										className="td center"
										colSpan="10"
									>
										{data.pages.projects.labels.no_projects}
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>

				{/* <confirmation-dialog
				v-if="showConfirmDialog"
				title="confirmDialogParams.title"
				action="confirmDialogParams.action"
				actionConfirmed="changeProjectStatus(confirmDialogParams.args)"
				actionCancelled="resetConfirmationDialog()"
			>
				{confirmDialogParams.content}
			</confirmation-dialog>

			<confirmation-dialog
				v-if="showConfirmDialogDeleteProject"
				title="confirmDialogParams.title"
				action="confirmDialogParams.action"
				actionConfirmed="
        deleteProject(confirmDialogParams.args.code, confirmDialogParams.args.facilityCode)
      "
				actionCancelled="resetConfirmationDialogForDeleteOp()"
			>
				{confirmDialogParams.content}
			</confirmation-dialog> */}
			</div>
		</>
	);
}

export default ProjectList;
