import useApplicantInscriptionValidation from "./useApplicantInscriptionValidation";
import EnrollmentService from "../../../services/EnrollmentService";

const useEnroll = ({ form }) => {
	const { validate } = useApplicantInscriptionValidation({ form });
	const enroll = async () => {
		if (!validate()) return false;
		const {
			dniFilename,
			studyCertificateFilename,
			compromiseStudyCertificateFilename,
			documentaryProgressFiveYearFilename,
			statementNotCriminalFilename,
			...rest
		} = form.values;

		await EnrollmentService.enroll({
			...rest,
			address: form.originAddress.value,
			dniBase64: dniFilename.base64,
			studyCertificateBase64: studyCertificateFilename.base64,
			compromiseStudyCertificateBase64: compromiseStudyCertificateFilename.base64,
			documentaryProgressFiveYearBase64: documentaryProgressFiveYearFilename.base64,
			statementNotCriminalRecordBase64: statementNotCriminalFilename.base64,
		});
		return true;
	};
	return enroll;
};

export default useEnroll;
