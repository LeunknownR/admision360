import PropTypes from "prop-types";
import { Flow } from "../../../components/styles";
import TextField from "../../../components/TextField";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import SelectField from "../../../components/SelectField";
import useSegmentedUbigeo from "../hooks/useSegmentedUbigeo";

const ApplicantOriginSection = ({ form, ubigeo }) => {
	const { originDepartmentId, originProvinceId } = form;
	const { departments, provinces, districts } = useSegmentedUbigeo({
		ubigeo,
		departmentId: originDepartmentId.value,
		provinceId: originProvinceId.value,
	});
	return (
		<ApplicantFieldSection title="LUGAR DE PROCEDENCIA">
			<Flow>
				<SelectField
					label="Departamento"
					placeholder="Elige un departamento"
					handler={form.originDepartmentId}
					options={departments.map(({ id, name }) => ({
						value: id,
						display: name,
					}))}
				/>
				<SelectField
					label="Provincia"
					placeholder="Elige un provincia"
					handler={form.originProvinceId}
					options={provinces.map(({ id, name }) => ({
						value: id,
						display: name,
					}))}
				/>
				<SelectField
					label="Distrito"
					placeholder="Elige un distrito"
					handler={form.originDistrictId}
					options={districts.map(({ id, name }) => ({
						value: id,
						display: name,
					}))}
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
