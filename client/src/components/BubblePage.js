import React, { useState, useEffect } from "react";
import axiosAuth from "./axiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property

	useEffect(() => {
		console.log("localStorage:", localStorage);
		console.log("BP token:", localStorage.getItem("token"));
		axiosAuth()
			.get("api/colors")
			.then((res) => {
				console.log("BubblePage res:", res);
				console.log("BubblePage colors:", res.data);
				setColorList(res.data);
			})
			.catch((err) => console.log("Something went wrong:", err));
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
