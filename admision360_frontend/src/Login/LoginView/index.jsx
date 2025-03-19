import Button from "../../components/Button";
import ViewHeader from "../../components/ViewHeader";
import TextField from "../../components/TextField";
import useLoginForm from "./hooks/useLoginForm";
import useLogin from "./hooks/useLogin";
import { Card, CardFields, Container } from "./styles";
import ErrorMessage from "../../components/ErrorMessage";
import { useState } from "react";

const LoginView = () => {
	const [globalError, setGlobalError] = useState(null);
	const form = useLoginForm({ setGlobalError });
	const login = useLogin({ form, setGlobalError });
	return (
		<Container>
			<Card>
				<ViewHeader
					title="INICIAR SESIÓN"
					description="Panel de administración"
				/>
				<CardFields>
					<TextField
						label="Usuario"
						placeholder="Ejm: scordero"
						handler={form.username}
						styles={{
							maxw: "unset",
						}}
					/>
					<TextField
						type="password"
						label="Contraseña"
						placeholder="********"
						handler={form.password}
						styles={{
							maxw: "unset",
						}}
					/>
					<ErrorMessage error={globalError} />
				</CardFields>
				<Button
					text="Iniciar sesión"
					disabled={!form.completed || login.isLoading}
					onClick={login.action}
				/>
			</Card>
		</Container>
	);
};

export default LoginView;
