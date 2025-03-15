import PropTypes from "prop-types";
import { Flow } from "../../../components/styles";
import TextField from "../../../components/TextField";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import SelectField from "../../../components/SelectField";

const ApplicantRepresentativeSection = ({ form, familyRelationships }) => {
	return (
		<ApplicantFieldSection title="DATOS DEL APODERADO">
			<Flow>
				<TextField
					label="Nombres y Apellidos"
					placeholder="Ejm: Carlos Sanchez"
					handler={form.representativeFullname}
					maxLength={100}
					styles={{
						maxw: "600px",
					}}
				/>
				<SelectField
					label="Parentesco"
					placeholder="Elige un parentesco"
					handler={form.representativeFamilyRelationshipId}
					styles={{
						w: "25%",
					}}
					options={familyRelationships.map(major => ({
						value: major.id,
						display: major.name,
					}))}
				/>
				<TextField
					label="Correo electrónico"
					placeholder="Ejm: example@gmail.com"
					handler={form.representativeEmail}
					maxLength={50}
					styles={{
						maxw: "350px",
					}}
				/>
			</Flow>
			<Flow>
				<TextField
					label="Número telefónico"
					placeholder="Ejm: 900800700"
					handler={form.representativePhone}
					maxLength={9}
					styles={{
						w: "180px",
					}}
				/>
				<TextField
					label="Ocupación"
					placeholder="Ejm: Desarrollador de software"
					handler={form.representativeOccupation}
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
ApplicantRepresentativeSection.propTypes = {
	form: PropTypes.object,
	familyRelationships: PropTypes.array,
};

export default ApplicantRepresentativeSection;
