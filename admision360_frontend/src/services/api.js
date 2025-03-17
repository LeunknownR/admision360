import axios from "axios";

const api = axios.create({
	baseURL: 'http://localhost:8080',
	headers: {
		'Content-Type': 'application/json',
	},
});

export async function handleError(action) {
	try {
		const response = await action();
		return response.data;
	}
	catch (error) {
		return error.response.data;
	}
}

export default api;
