import SelectField from "../../components/SelectField";
import { Flow, Title } from "../../components/styles";
import TextField from "../../components/TextField";
import ApplicantFieldGroup from "./ApplicantFieldGroup";
import useApplicantInscriptionForm from "./hooks/useApplicantInscriptionForm";
import { Container } from "./styles";

const ApplicantInscriptionView = () => {
	const form = useApplicantInscriptionForm();
	return (
		<Container>
			<Title mb="15px">INSCRIPCIÓN - ADMISIÓN 2025-I</Title>
			<Flow
				direction="column"
				gap="40px"
			>
				<ApplicantFieldGroup title="DATOS DEL POSTULANTE">
					<Flow>
						<TextField
							label="DNI"
							placeholder="Ejm: 12345678"
							handler={form.dni}
						/>
						<TextField
							label="Nombres"
							placeholder="Ejm: Shelsy"
							handler={form.name}
						/>
						<TextField
							label="Apellidos"
							placeholder="Ejm: Cordero"
							handler={form.surname}
						/>
					</Flow>
					<Flow>
						<TextField
							type="date"
							label="Fecha de nacimiento"
							handler={form.birthdate}
						/>
						<TextField
							label="Correo electrónico"
							placeholder="Ejm: example@gmail.com"
							handler={form.email}
						/>
						<TextField
							label="Número telefónico"
							placeholder="Ejm: 900800700"
							handler={form.phone}
						/>
						<TextField
							label="Ocupación"
							placeholder="Ejm: Desarrollador de software"
							handler={form.occupation}
						/>
					</Flow>
				</ApplicantFieldGroup>
				<ApplicantFieldGroup title="LUGAR DE PROCEDENCIA">
					<Flow>
						<SelectField
							label="Departamento"
							placeholder="Elige un departamento"
							handler={form.originDepartmentId}
							options={[
								{
									value: 1,
									display: "Ica",
								},
							]}
						/>
						<SelectField
							label="Provincia"
							placeholder="Elige un provincia"
							handler={form.originProvinceId}
							options={[
								{
									value: 1,
									display: "Ica",
								},
							]}
						/>
						<SelectField
							label="Distrito"
							placeholder="Elige un distrito"
							handler={form.originDistrictId}
							options={[
								{
									value: 1,
									display: "Ica",
								},
							]}
						/>
						<TextField
							label="Dirección"
							placeholder="Ejm: Calle Javier Milei 666"
							handler={form.occupation}
						/>
					</Flow>
				</ApplicantFieldGroup>
				<ApplicantFieldGroup title="CARRERA PROFESIONAL">
					<Flow>
						<SelectField
							label="Carrera"
							placeholder="Elige una carrera"
							handler={form.majorId}
							options={[
								{
									value: 1,
									display: "Ing. de sistemas",
								},
							]}
						/>
						<TextField
							label="Facultad"
							placeholder="-"
							handler={form.majorFaculty}
							disabled={true}
						/>
						<TextField
							label="Escuela académica"
							placeholder="-"
							handler={form.majorProfessionalSchool}
							disabled={true}
						/>
					</Flow>
				</ApplicantFieldGroup>
			</Flow>
		</Container>
	);
};

export default ApplicantInscriptionView;
