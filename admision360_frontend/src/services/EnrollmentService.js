import api, { handleError } from "./api";

export default class EnrollmentService {
	static async enroll(data) {
		return handleError(() => api.post('/enroll', data));
	}
}
