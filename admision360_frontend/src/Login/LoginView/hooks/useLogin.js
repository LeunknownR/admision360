import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import useLoading from "../../../hooks/useLoading";
import AppRoutes from "../../../router/AppRoutes";

const MESSAGES = {
	INVALID_CREDENTIALS: "Las credenciales ingresadas son inválidas",
};
const useLogin = ({ form, setGlobalError }) => {
	const loading = useLoading();
	const navigate = useNavigate();
	async function login() {
		loading.show();
		const { data, message } = await AuthService.login(form.values);
		loading.hide();
		if (!data) {
			setGlobalError(MESSAGES[message] || "Ha ocurrido un error inesperado");
			return;
		}
		const { token, username, name } = data;
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify({ username, name }));
		navigate(AppRoutes.administrationPanel);
	}
	return { action: login, isLoading: loading.isLoading };
}
	
export default useLogin;