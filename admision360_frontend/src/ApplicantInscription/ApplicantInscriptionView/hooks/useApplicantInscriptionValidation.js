const useApplicantInscriptionValidation = ({ form }) => {
	const validateDNI = dni => {
		if (dni.value.length === 0) {
			dni.error.set("El DNI es requerido");
			return;
		}
		if (!/^\d{8}$/.test(dni.value)) {
			dni.error.set("El DNI debe tener 8 dígitos");
		}
	};
	const validatePersonalData = () => {
		const { dni, name, surname, gender, birthdate, email, phone } = form;
		validateDNI(dni);
		if (name.value.length === 0) name.error.set("El nombre es requerido");
		if (surname.value.length === 0)
			surname.error.set("El apellido es requerido");
		if (gender.value.length === 0)
			gender.error.set("El género es requerido");
		validateBirthdate(birthdate);
		validateEmail(email);
		validatePhone(phone);
	};
	const validateBirthdate = birthdate => {
		if (birthdate.value.length === 0) {
			birthdate.error.set("La fecha de nacimiento es requerida");
			return;
		}
		if (new Date(birthdate.value) > new Date()) {
			birthdate.error.set(
				"La fecha de nacimiento no puede ser mayor a la fecha actual"
			);
			return;
		}
		if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate.value)) {
			birthdate.error.set("La fecha debe tener el formato YYYY-MM-DD");
		}
	};
	const validatePhone = phone => {
		if (phone.value.length === 0)
			phone.error.set("El teléfono es requerido");
		else if (!/^\d{9}$/.test(phone.value))
			phone.error.set("El teléfono debe tener 9 dígitos");
	};
	const validateEmail = email => {
		if (email.value.length === 0)
			email.error.set("El correo electrónico es requerido");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
			email.error.set("El correo electrónico no es válido");
	};
	const validateOrigin = () => {
		const {
			occupation,
			originDepartmentId,
			originProvinceId,
			originDistrictId,
			originAddress,
		} = form;
		if (occupation.value.length === 0)
			occupation.error.set("La ocupación es requerida");
		if (originDepartmentId.value === 0)
			originDepartmentId.error.set(
				"El departamento de origen es requerido"
			);
		if (originProvinceId.value === 0)
			originProvinceId.error.set("La provincia de origen es requerida");
		if (originDistrictId.value === 0)
			originDistrictId.error.set("El distrito de origen es requerido");
		if (originAddress.value.length === 0)
			originAddress.error.set("La dirección de origen es requerida");
	};
	const validateStudies = () => {
		const {
			studiesInstitutionType,
			studiesEndYear,
			studiesDepartmentId,
			studiesProvinceId,
			studiesDistrictId,
			studiesAddress,
			studiesInstitutionName,
		} = form;
		if (studiesInstitutionType.value.length === 0) {
			studiesInstitutionType.error.set(
				"El tipo de institución de estudios es requerido"
			);
		}
		if (studiesEndYear.value.length === 0) {
			studiesEndYear.error.set(
				"El año de finalización de estudios es requerido"
			);
		} else if (!/^\d{4}$/.test(studiesEndYear.value)) {
			studiesEndYear.error.set("El año debe tener 4 dígitos");
		} else if (new Date(studiesEndYear.value) > new Date()) {
			studiesEndYear.error.set(
				"El año de finalización de estudios no puede ser mayor a la fecha actual"
			);
		}

		if (studiesDepartmentId.value === 0)
			studiesDepartmentId.error.set(
				"El departamento de estudios es requerido"
			);
		if (studiesProvinceId.value === 0)
			studiesProvinceId.error.set(
				"La provincia de estudios es requerida"
			);
		if (studiesDistrictId.value === 0)
			studiesDistrictId.error.set("El distrito de estudios es requerido");
		if (studiesAddress.value.length === 0)
			studiesAddress.error.set("La dirección de estudios es requerida");
		if (studiesInstitutionName.value.length === 0)
			studiesInstitutionName.error.set(
				"El nombre de la institución de estudios es requerido"
			);
	};
	const validateRepresentative = () => {
		const {
			representativeFullname,
			representativeEmail,
			representativeFamilyRelationshipId,
			representativeOccupation,
			representativePhone,
		} = form;
		if (representativeFullname.value.length === 0)
			representativeFullname.error.set(
				"El nombre del representante es requerido"
			);
		validateEmail(representativeEmail);
		if (representativeFamilyRelationshipId.value === 0)
			representativeFamilyRelationshipId.error.set(
				"La relación familiar del representante es requerida"
			);
		if (representativeOccupation.value.length === 0)
			representativeOccupation.error.set(
				"La ocupación del representante es requerida"
			);
		validatePhone(representativePhone);
	};
	const validateProgramMajor = () => {
		const { majorId } = form;
		if (majorId.value === 0)
			majorId.error.set("El programa de estudios es requerido");
	};
	const validateDocuments = form => {
		const {
			statementNotCriminalFilename,
			dniFilename,
			studyCertificateFilename,
			studiesCompleted,
			compromiseStudyCertificateFilename,
			documentaryProgressFiveYearFilename,
		} = form;
		if (statementNotCriminalFilename.value.base64.length === 0)
			statementNotCriminalFilename.error.set("El documento es requerido");
		if (dniFilename.value.base64.length === 0)
			dniFilename.error.set("El documento es requerido");
		if (studyCertificateFilename.value.base64.length === 0)
			studyCertificateFilename.error.set("El documento es requerido");
		if (!studiesCompleted.value) {
			if (compromiseStudyCertificateFilename.value.base64.length === 0)
				compromiseStudyCertificateFilename.error.set(
					"El documento es requerido"
				);
			if (documentaryProgressFiveYearFilename.value.base64.length === 0)
				documentaryProgressFiveYearFilename.error.set(
					"El documento es requerido"
				);
		}
	};

	const validate = () => {
		form.clearErrors();
		validatePersonalData();
		validateOrigin();
		validateStudies();
		validateRepresentative(form);
		validateProgramMajor(form);
		validateDocuments(form);
		return !form.hasErrors();
	};

	return { validate };
};

export default useApplicantInscriptionValidation;
