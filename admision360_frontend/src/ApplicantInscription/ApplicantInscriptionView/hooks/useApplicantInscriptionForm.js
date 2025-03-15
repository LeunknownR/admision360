import { useState } from "react";
import useFieldHandler from "../../../hooks/useFieldHandler";
import { INITIAL_ERRORS, INITIAL_FORM } from "./constants";

const useApplicantInscriptionForm = () => {
	const [form, setForm] = useState({ ...INITIAL_FORM });
	const [errors, setErrors] = useState({ ...INITIAL_ERRORS });
	const getFieldHandler = useFieldHandler({
		form,
		setForm,
		errors,
		setErrors,
	});
	function clearErrors() {
		setErrors({ ...INITIAL_ERRORS });
	}
	function hasErrors() {
		return Object.values(errors).some(error => error);
	}
	const originDistrictId = getFieldHandler("originDistrictId");
	const originProvinceId = getFieldHandler("originProvinceId", () => {
		originDistrictId.set(0);
	});
	const studiesDistrictId = getFieldHandler("studiesDistrictId");
	const studiesProvinceId = getFieldHandler("studiesProvinceId", () => {
		studiesDistrictId.set(0);
	});
	return {
		values: form,
		hasErrors,
		clearErrors,
		dni: getFieldHandler("dni"),
		name: getFieldHandler("name"),
		surname: getFieldHandler("surname"),
		gender: getFieldHandler("gender"),
		birthdate: getFieldHandler("birthdate"),
		email: getFieldHandler("email"),
		phone: getFieldHandler("phone"),
		occupation: getFieldHandler("occupation"),
		originDepartmentId: getFieldHandler("originDepartmentId", () => {
			originProvinceId.set(0);
			originDistrictId.set(0);
		}),
		originProvinceId,
		originDistrictId,
		originAddress: getFieldHandler("originAddress"),
		studiesInstitutionType: getFieldHandler("studiesInstitutionType"),
		studiesCompleted: getFieldHandler("studiesCompleted"),
		studiesEndYear: getFieldHandler("studiesEndYear"),
		studiesDepartmentId: getFieldHandler("studiesDepartmentId", () => {
			studiesProvinceId.set(0);
			studiesDistrictId.set(0);
		}),
		studiesProvinceId,
		studiesDistrictId,
		studiesAddress: getFieldHandler("studiesAddress"),
		studiesInstitutionName: getFieldHandler("studiesInstitutionName"),
		representativeFullname: getFieldHandler("representativeFullname"),
		representativeFamilyRelationshipId: getFieldHandler(
			"representativeFamilyRelationshipId"
		),
		representativeEmail: getFieldHandler("representativeEmail"),
		representativePhone: getFieldHandler("representativePhone"),
		representativeOccupation: getFieldHandler("representativeOccupation"),
		majorId: getFieldHandler("majorId"),
		facultyId: getFieldHandler("facultyId"),
		dniFilename: getFieldHandler("dniFilename"),
		studyCertificateFilename: getFieldHandler("studyCertificateFilename"),
		compromiseStudyCertificateFilename: getFieldHandler(
			"compromiseStudyCertificateFilename"
		),
		documentaryProgressFiveYearFilename: getFieldHandler(
			"documentaryProgressFiveYearFilename"
		),
		statementNotCriminalFilename: getFieldHandler(
			"statementNotCriminalFilename"
		),
	};
};

export default useApplicantInscriptionForm;
