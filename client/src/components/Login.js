import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosAuth from "./axiosAuth";

const Login = () => {
	const history = useHistory();
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
		submitted: false,
	});

	const handleChanges = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		console.log("LfS token:", localStorage.getItem("token"));

		axiosAuth()
			.post("api/login", credentials)
			.then((res) => {
				localStorage.setItem("token", res.data.payload);
				console.log("Login AA token:", res.data.payload);
				history.push("/bubble-page");
			});
		setCredentials({
			username: "",
			password: "",
			submitted: false,
		});
	};
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	return (
		<>
			<form onSubmit={formSubmit}>
				<label htmlFor="username">Username</label>
				<input
					name="username"
					value={credentials.username}
					placeholder="Please enter your username."
					onChange={handleChanges}
				/>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					value={credentials.password}
					placeholder="Please enter your password"
					onChange={handleChanges}
				/>
				<button>Submit</button>
			</form>
		</>
	);
};

export default Login;
