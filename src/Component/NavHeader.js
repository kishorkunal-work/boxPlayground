/* eslint-disable indent */
import {
	faCog,
	faHome,
	faUser,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function NavHeader() {
	return (
		<>
			<header className="w-full z-[1000] mt-16 pt-2 pb-2 pl-3 bg-gray-300 text-gray-800 shadow-sm">
				<nav className="flex items-center">
					<div>
						<button
							type="button"
							className="py-1 px-2 focus:outline-none rounded dark:text-gray-800 inline-flex items-stretch justify-center"
							onClick="go('/oven/projects')"
						>
							<FontAwesomeIcon
								icon={faHome}
								className="w-5 h-5 mr-1"
								onClick="editProject(project.code, project.facilityCode)"
							/>
							<span className="ml-1">Home</span>
						</button>
					</div>
					<div
						// v-if="isAdmin"
						className="ml-auto mr-2 dropdown inline-block relative"
					>
						<div className="py-1 px-2 focus:outline-none rounded inline-flex items-stretch">
							<FontAwesomeIcon
								icon={faUser}
								className="w-5 h-5 mr-1"
								onClick="editProject(project.code, project.facilityCode)"
							/>
							<span className="mr-1">User</span>
							<svg
								className="fill-current h-5 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>

						<ul className="dropdown-menu absolute l-0 t-0 hidden pt-1 w-44">
							<li className="flex items-center cursor-pointer z-1001 rounded-t py-1 px-4 whitespace-no-wrap focus:outline-none border border-gray-100 hover:border-gray-300 border-b-0 bg-gray-300 hover:bg-gray-100">
								<FontAwesomeIcon
									icon={faUserCircle}
									className="w-5 h-5 mr-1"
									onClick="editProject(project.code, project.facilityCode)"
								/>
								<span></span>
							</li>
							<li className="flex items-center cursor-pointer z-1001 rounded-t py-1 px-4 whitespace-no-wrap focus:outline-none border border-gray-100 hover:border-gray-300 bg-gray-300 hover:bg-gray-100">
								<FontAwesomeIcon
									icon={faCog}
									className="w-5 h-5 mr-1"
									onClick="editProject(project.code, project.facilityCode)"
								/>
								<span></span>
							</li>
						</ul>
					</div>
					<div className="inline-flex items-center h-full">
						<select
							id="language"
							className="mx-2 py-1 focus:outline-none rounded dark:text-gray-800 border border-gray-300"
						>
							<option
								key="locale"
								value="locale"
							>
								en-US
							</option>
							<option
								key="locale"
								value="locale"
							>
								en-JY
							</option>
						</select>
						<div
							// v-if="applicationStore.session.authenticated"
							className="dropdown inline-block relative"
						>
							<div className="text-gray-700 py-1 px-4 rounded inline-flex items-center focus:outline-none dark:text-gray-800 border border-gray-300">
								<FontAwesomeIcon
									icon={faUser}
									className="w-5 h-5 mr-1"
								/>
								<span className="mr-1"></span>
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
							<ul className="dropdown-menu absolute right-0 hidden text-gray-700 pt-1 w-[6.5rem]">
								<li
									className="items-center cursor-pointer"
									onClick="go('/account')"
								>
									<a className="z-1001 rounded-t py-1 px-4 block whitespace-no-wrap focus:outline-none border border-gray-100 hover:border-gray-300 border-b-0 bg-gray-300 hover:bg-gray-100"></a>
								</li>
								<li
									className="items-center cursor-pointer"
									onClick="signOut"
								>
									<a className="z-1001 rounded-t py-1 px-4 block whitespace-no-wrap focus:outline-none border border-gray-100 hover:border-gray-300 bg-gray-300 hover:bg-gray-100"></a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}

export default NavHeader;
