import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getAPIColors as mockAPI } from "./getAPIColors";

jest.mock("./getAPIColors");
let colors = [
	{
		color: "aliceblue",
		code: {
			hex: "#f0f8ff",
		},
		id: 1,
	},
	{
		color: "limegreen",
		code: {
			hex: "#99ddbc",
		},
		id: 2,
	},
	{
		color: "aqua",
		code: {
			hex: "#00ffff",
		},
		id: 3,
	},
	{
		color: "aquamarine",
		code: {
			hex: "#7fffd4",
		},
		id: 4,
	},
];

test("Fetches data and renders the bubbles", async () => {
	mockAPI.mockResolvedValueOnce(colors);

	await render(<BubblePage />);

	waitFor(() => {
		let color = screen.getByTestId("1");
		expect(color).toEqual(1);
	});
});
