import Button from "../../components/Button";
import TextField from "../../components/TextField";
import useLoginForm from "./hooks/useLoginForm";
import useLoginAction from "./hooks/useLoginAction";
import { Card, CardFields, CardHeader, Container } from "./styles";

const LoginView = () => {
	const form = useLoginForm();
	const login = useLoginAction({ form: form.values });
	return (
		<Container>
			<Card>
				<CardHeader>
					<h2>INICIAR SESIÓN</h2>
					<h3>Panel de administración</h3>
				</CardHeader>
				<CardFields>
					<TextField
						label="Usuario"
						placeholder="Ejm: scordero"
						handler={form.username}
					/>
					<TextField
						type="password"
						label="Contraseña"
						placeholder="********"
						handler={form.password}
					/>
				</CardFields>
				<Button
					text="Iniciar sesión"
					disabled={!form.completed}
					onClick={login}
				/>
			</Card>
		</Container>
	);
};

export default LoginView;
