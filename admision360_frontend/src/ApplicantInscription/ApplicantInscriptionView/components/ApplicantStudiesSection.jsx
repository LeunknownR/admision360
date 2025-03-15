import PropTypes from "prop-types";
import RadioField from "../../../components/RadioField";
import { Flow } from "../../../components/styles";
import TextField from "../../../components/TextField";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import { INSTITUTION_TYPE_OPTIONS, STUDIES_COMPLETED_OPTIONS } from "../../constants";
import SelectField from "../../../components/SelectField";

const ApplicantStudiesSection = ({ form, ubigeo }) => {
	return (
		<ApplicantFieldSection title="ESTUDIOS DE SECUNDARIA">
			<Flow>
				<SelectField
					label="Tipo de institución"
					placeholder="Elige un tipo"
					handler={form.studiesInstitutionType}
					options={INSTITUTION_TYPE_OPTIONS}
				/>
				<RadioField
					label="Estudios concluidos"
					handler={form.studiesCompleted}
					options={STUDIES_COMPLETED_OPTIONS}
				/>
				<TextField
					label="Año de finalización"
					placeholder="Ejm: 2020"
					maxLength={4}
					handler={form.studiesEndYear}
					styles={{
						w: "180px",
					}}
				/>
			</Flow>
			<Flow>
				<SelectField
					label="Distrito"
					placeholder="Elige un departamento"
					handler={form.studiesDepartmentId}
					options={ubigeo.departments}
				/>
				<SelectField
					label="Provincia"
					placeholder="Elige un provincia"
					handler={form.studiesProvinceId}
					options={ubigeo.provinces}
				/>
				<SelectField
					label="Distrito"
					placeholder="Elige un distrito"
					handler={form.studiesDistrictId}
					options={ubigeo.districts}
				/>
				<TextField
					label="Dirección"
					placeholder="Ejm: Calle Javier Milei 666"
					handler={form.studiesAddress}
					maxLength={100}
					styles={{
						w: "100%",
						maxw: "400px",
					}}
				/>
			</Flow>
			<TextField
				label="Institución educativa"
				placeholder="Ejm: I.E. Jorge Basadre"
				handler={form.studiesInstitutionName}
				styles={{
					w: "100%",
					maxw: "420px",
				}}
			/>
		</ApplicantFieldSection>
	);
};
ApplicantStudiesSection.propTypes = {
	form: PropTypes.object,
	ubigeo: PropTypes.object,
};

export default ApplicantStudiesSection;
