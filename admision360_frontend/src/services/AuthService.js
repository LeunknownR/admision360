import api, { handleError } from './api';

export default class AuthService {
	static login(data) {
		return handleError(() => api.post('/auth/login', data));
	}
}
