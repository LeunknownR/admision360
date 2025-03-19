import ExamService from "../../../services/ExamService";
import useLoading from "../../../hooks/useLoading";

const useQualifyExams = ({ applicantBundleForm, setQualifiedExamsLink }) => {
	const loading = useLoading();
	function validateForm() {
		const { identificationFilename, answersFilename } = applicantBundleForm;
		let existErrors = false;
		if (identificationFilename.value.base64.length === 0) {
			identificationFilename.error.set(
				"Debes subir el archivo de identificación"
			);
			existErrors = true;
		}
		if (answersFilename.value.base64.length === 0) {
			answersFilename.error.set(
				"Debes subir el archivo de respuestas"
			);
			existErrors = true;
		}
		return !existErrors;
	}
	async function qualifyExams() {
		if (!validateForm()) return null;
		const { identificationFilename, answersFilename } = applicantBundleForm;
		loading.show();
		const { qualifiedExamsBase64 } = await ExamService.qualifyExams({
			identificationDbfBase64: identificationFilename.value.base64,
			answersDbfBase64: answersFilename.value.base64,
		});
		loading.hide();
		if (qualifiedExamsBase64)
			setQualifiedExamsLink(
				`data:application/pdf;base64,${qualifiedExamsBase64}`
			);
	}
	return { action: qualifyExams, isLoading: loading.isLoading };
};

export default useQualifyExams;
