import PropTypes from "prop-types";
import RadioField from "../../../components/RadioField";
import { Flow } from "../../../components/styles";
import TextField from "../../../components/TextField";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import {
	INSTITUTION_TYPE_OPTIONS,
	STUDIES_COMPLETED_OPTIONS,
} from "../../constants";
import SelectField from "../../../components/SelectField";
import useSegmentedUbigeo from "../hooks/useSegmentedUbigeo";

const ApplicantStudiesSection = ({ form, ubigeo }) => {
	const { departments, provinces, districts } = useSegmentedUbigeo({
		ubigeo,
		departmentId: form.studiesDepartmentId.value,
		provinceId: form.studiesProvinceId.value,
	});
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
					options={departments.map(({ id, name }) => ({
						value: id,
						display: name,
					}))}
				/>
				<SelectField
					label="Provincia"
					placeholder="Elige un provincia"
					handler={form.studiesProvinceId}
					options={provinces.map(({ id, name }) => ({
						value: id,
						display: name,
					}))}
				/>
				<SelectField
					label="Distrito"
					placeholder="Elige un distrito"
					handler={form.studiesDistrictId}
					options={districts.map(({ id, name }) => ({
						value: id,
						display: name,
					}))}
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
