import React, { useState } from "react";

const Login = () => {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
		submitted: false,
	});

	const handleChanges = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		setFormState({
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
					value={formState.username}
					placeholder="Please enter your username."
					onChange={handleChanges}
				/>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					value={formState.password}
					placeholder="Please enter your password"
					onChange={handleChanges}
				/>
				<button>Submit</button>
			</form>
		</>
	);
};

export default Login;
