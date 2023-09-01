import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import ProjectList from './Pages/ProjectList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={<ProjectList />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/assembly"
						element={<App />}
					/>
				</Routes>
			</div>
			{/* <App /> */}
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
