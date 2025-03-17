import api from './api';

export default class MasterService {
	static async getUbigeo() {
		const response = await api.get('/ubigeo');
		return response.data.data;
	}
	static async getMajors() {
		const response = await api.get('/majors');
		return response.data.data.majors;
	}
	static async getFamily() {
		const response = await api.get('/family');
		return response.data.data;
	}
}
