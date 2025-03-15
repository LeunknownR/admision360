import PropTypes from "prop-types";
import { Flow } from "../../../components/styles";
import TextField from "../../../components/TextField";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import SelectField from "../../../components/SelectField";

const ApplicantOriginSection = ({ form, ubigeo }) => {
	return (
		<ApplicantFieldSection title="LUGAR DE PROCEDENCIA">
			<Flow>
				<SelectField
					label="Departamento"
					placeholder="Elige un departamento"
					handler={form.originDepartmentId}
					options={ubigeo.departments}
				/>
				<SelectField
					label="Provincia"
					placeholder="Elige un provincia"
					handler={form.originProvinceId}
					options={ubigeo.provinces}
				/>
				<SelectField
					label="Distrito"
					placeholder="Elige un distrito"
					handler={form.originDistrictId}
					options={ubigeo.districts}
				/>
				<TextField
					label="Dirección"
					placeholder="Ejm: Calle Javier Milei 666"
					handler={form.originAddress}
					maxLength={100}
					styles={{
						w: "100%",
						maxw: "420px",
					}}
				/>
			</Flow>
		</ApplicantFieldSection>
	);
};
ApplicantOriginSection.propTypes = {
	form: PropTypes.object,
	ubigeo: PropTypes.object,
};

export default ApplicantOriginSection;
