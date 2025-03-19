import api, { handleError } from "./api";

export default class ExamService {
	static async getExams(academicPeriodId) {
		const response = await api.get(`/all-exams-models/${academicPeriodId}`);
		return response.data.data;
	}
	static async generateExams(data) {
		return handleError(() => api.post('/generate-exams', data));
	}
}
