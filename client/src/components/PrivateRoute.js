import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return localStorage.getItem("token") ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				);
				// if (localStorage.getItem("token")) {
				// 	return <Component {...props} />;
				// } else {
				// 	return <Redirect to="/" />;
				// }
			}}
		/>
	);
};
export default PrivateRoute;
