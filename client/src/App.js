import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
	// localStorage.removeItem("token");
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Login} />
				<PrivateRoute path="/bubble-page" component={BubblePage} />
				{/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
			</div>
		</Router>
	);
}

export default App;
