import React from 'react';
import data from '../locales/en.json';

function Login() {
	function authenticate() {
		alert(true);
	}

	return (
		<section className="h-screen">
			<div className="container mx-auto h-full">
				<div className="h-full flex justify-center items-center flex-wrap text-gray-800">
					<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 object-scale-down">
						<img
							src="../assets/images/site/oven.jpg"
							className="w-full rounded-[30rem]"
							alt="Oven image"
						/>
					</div>
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<div className="text-2xl font-bold p-3 mb-3">
							{data.pages.login.labels.title}
						</div>
						<form>
							<div className="mb-6">
								<input
									data="userName"
									type="text"
									className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder={data.pages.login.placeholders.username}
								/>
							</div>
							<div className="mb-6">
								<input
									data="password"
									type="password"
									className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder={data.pages.login.placeholders.password}
								/>
							</div>
							<button
								type="button"
								className="inline-block px-7 py-3 bg-taikisha text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-taikisha hover:shadow-lg focus:bg-taikisha focus:shadow-lg focus:outline-none focus:ring-0 active:bg-taikisha active:shadow-lg transition duration-150 ease-in-out w-full"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
								onClick={authenticate}
							>
								{data.pages.login.buttons.submit}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
