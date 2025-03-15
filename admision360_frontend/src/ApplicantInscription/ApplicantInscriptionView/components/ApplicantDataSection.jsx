import PropTypes from "prop-types";
import RadioField from "../../../components/RadioField";
import { Flow } from "../../../components/styles";
import TextField from "../../../components/TextField";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import { GENDER_OPTIONS } from "../../constants";

const ApplicantDataSection = ({ form }) => {
	return (
		<ApplicantFieldSection title="DATOS DEL POSTULANTE">
			<Flow>
				<TextField
					label="DNI"
					placeholder="Ejm: 12345678"
					handler={form.dni}
					maxLength={8}
					styles={{
						w: "180px",
					}}
				/>
				<TextField
					label="Nombres"
					placeholder="Ejm: Shelsy"
					handler={form.name}
					maxLength={50}
					styles={{
						maxw: "350px",
					}}
				/>
				<TextField
					label="Apellidos"
					placeholder="Ejm: Cordero"
					handler={form.surname}
					maxLength={50}
					styles={{
						maxw: "350px",
					}}
				/>
				<RadioField
					label="Sexo"
					handler={form.gender}
					options={GENDER_OPTIONS}
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
					maxLength={50}
					styles={{
						maxw: "350px",
					}}
				/>
				<TextField
					label="Número telefónico"
					placeholder="Ejm: 900800700"
					handler={form.phone}
					maxLength={9}
					styles={{
						w: "180px",
					}}
				/>
				<TextField
					label="Ocupación"
					placeholder="Ejm: Desarrollador de software"
					handler={form.occupation}
					maxLength={50}
					styles={{
						w: "100%",
						maxw: "420px",
					}}
				/>
			</Flow>
		</ApplicantFieldSection>
	);
};
ApplicantDataSection.propTypes = {
	form: PropTypes.object,
};

export default ApplicantDataSection;
