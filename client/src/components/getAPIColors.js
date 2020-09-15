import axiosAuth from "./axiosAuth";

export async function getAPIColors() {
	try {
		const response = await axiosAuth.get("/api/colors");
		return response;
	} catch (err) {
		console.log(err);
	}
}
