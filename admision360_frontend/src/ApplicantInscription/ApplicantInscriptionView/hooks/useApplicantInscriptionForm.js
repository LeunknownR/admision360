import { useState } from "react";
import useFieldHandler from "../../../hooks/useFieldHandler";

const useApplicantInscriptionForm = () => {
	const [form, setForm] = useState({
		dni: "",
		name: "",
		surname: "",
		gender: "",
		birthdate: "",
		email: "",
		phone: "",
		occupation: "",
		originDepartmentId: 0,
		originProvinceId: 0,
		originDistrictId: 0,
		originAddress: "",
		studiesInstitutionTypeId: 0,
		studiesCompleted: true,
		studiesEndYear: "",
		studiesDepartmentId: 0,
		studiesProvinceId: 0,
		studiesDistrictId: 0,
		studiesAddress: "",
		studiesInstitutionName: "",
		representativeFullname: "",
		representativeFamilyRelationshipId: 0,
		representativeEmail: "",
		representativePhone: "",
		representativeOccupation: "",
		majorId: 0,
		majorFaculty: "",
		majorProfessionalSchool: "",
	});
	const getFieldHandler = useFieldHandler({ form, setForm });
	function areCompleted() {
		const {
			birthdate,
			dni,
			name,
			surname,
			email,
			gender,
			phone,
			occupation,
			originDepartmentId,
			originProvinceId,
			originDistrictId,
			originAddress,
			representativeFullname,
			representativeEmail,
			representativeFamilyRelationshipId,
			representativeOccupation,
			representativePhone,
			studiesDepartmentId,
			studiesProvinceId,
			studiesDistrictId,
			studiesAddress,
			studiesEndYear,
			studiesInstitutionName,
			studiesInstitutionTypeId,
			majorId,
		} = form;
		return (
			birthdate.length > 0 &&
			dni.length > 0 &&
			name.length > 0 &&
			surname.length > 0 &&
			email.length > 0 &&
			gender.length > 0 &&
			phone.length > 0 &&
			occupation.length > 0 &&
			originDepartmentId.length > 0 &&
			originProvinceId.length > 0 &&
			originDistrictId.length > 0 &&
			originAddress.length > 0 &&
			representativeFullname.length > 0 &&
			representativeEmail.length > 0 &&
			representativeFamilyRelationshipId.length > 0 &&
			representativeOccupation.length > 0 &&
			representativePhone.length > 0 &&
			studiesDepartmentId.length > 0 &&
			studiesProvinceId.length > 0 &&
			studiesDistrictId.length > 0 &&
			studiesAddress.length > 0 &&
			studiesEndYear.length > 0 &&
			studiesInstitutionName.length > 0 &&
			studiesInstitutionTypeId.length > 0 &&
			majorId
		);
	}
	const majorFaculty = getFieldHandler("majorFaculty");
	const majorProfessionalSchool = getFieldHandler("majorProfessionalSchool");
	return {
		values: form,
		dni: getFieldHandler("dni"),
		name: getFieldHandler("name"),
		surname: getFieldHandler("surname"),
		gender: getFieldHandler("gender"),
		birthdate: getFieldHandler("birthdate"),
		email: getFieldHandler("email"),
		phone: getFieldHandler("phone"),
		occupation: getFieldHandler("occupation"),
		originDepartmentId: getFieldHandler("originDepartmentId"),
		originProvinceId: getFieldHandler("originProvinceId"),
		originDistrictId: getFieldHandler("originDistrictId"),
		originAddress: getFieldHandler("originAddress"),
		studiesInstitutionTypeId: getFieldHandler("studiesInstitutionTypeId"),
		studiesCompleted: getFieldHandler("studiesCompleted"),
		studiesEndYear: getFieldHandler("studiesEndYear"),
		studiesDepartmentId: getFieldHandler("studiesDepartmentId"),
		studiesProvinceId: getFieldHandler("studiesProvinceId"),
		studiesDistrictId: getFieldHandler("studiesDistrictId"),
		studiesAddress: getFieldHandler("studiesAddress"),
		studiesInstitutionName: getFieldHandler("studiesInstitutionName"),
		representativeFullname: getFieldHandler("representativeFullname"),
		representativeFamilyRelationshipId: getFieldHandler(
			"representativeFamilyRelationshipId"
		),
		representativeEmail: getFieldHandler("representativeEmail"),
		representativePhone: getFieldHandler("representativePhone"),
		representativeOccupation: getFieldHandler("representativeOccupation"),
		majorId: getFieldHandler("majorId", value => {
			console.log(value);
			if (!value)
				return;
			majorFaculty.set("Pene");
			majorProfessionalSchool.set("Pene");
		}),
		majorFaculty,
		majorProfessionalSchool,
	};
};

export default useApplicantInscriptionForm;
