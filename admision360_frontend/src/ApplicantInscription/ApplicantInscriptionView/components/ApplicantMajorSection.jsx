import PropTypes from "prop-types";
import { Flow } from "../../../components/styles";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import SelectField from "../../../components/SelectField";
import Field from "../../../components/Field";

const ApplicantMajorSection = ({ form, majors, majorSelected }) => {
	return (
		<ApplicantFieldSection title="CARRERA PROFESIONAL">
			<Flow align="flex-end">
				<SelectField
					label="Carrera"
					placeholder="Elige una carrera"
					handler={form.majorId}
					styles={{
						w: "25%",
					}}
					options={majors.map(major => ({
						value: major.id,
						display: major.name,
					}))}
				/>
				<Flow
					mb="12px"
					w="max-content"
				>
					<Field
						label="Escuela académica"
						value={majorSelected?.professionalSchool || "-"}
					/>
					<Field
						label="Facultad"
						value={majorSelected?.faculty?.name || "-"}
					/>
				</Flow>
			</Flow>
		</ApplicantFieldSection>
	);
};
ApplicantMajorSection.propTypes = {
	form: PropTypes.object,
	majors: PropTypes.array,
	majorSelected: PropTypes.object,
};

export default ApplicantMajorSection;
