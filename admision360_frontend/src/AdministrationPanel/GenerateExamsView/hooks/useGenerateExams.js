import ExamService from "../../../services/ExamService";
import useLoading from "../../../hooks/useLoading";

const useGenerateExams = ({ academicPeriodId, generateExamForm, fetchExams }) => {
	const loading = useLoading();
	function validateForm() {
		const { questionsBankFilename } = generateExamForm;
		if (questionsBankFilename.value.base64.length === 0) {
			generateExamForm.questionsBankFilename.error.set(
				"Debes subir el banco de preguntas"
			);
			return false;
		}
		return true;
	}
	async function generateQuestionBank() {
		if (!validateForm()) return;
		const { questionsBankFilename } = generateExamForm;
		loading.show();
		await ExamService.generateExams({
			academicPeriodId,
			questionBankBase64: questionsBankFilename.value.base64,
		});
		await fetchExams();
		loading.hide();
	}
	return { action: generateQuestionBank, isLoading: loading.isLoading };
};

export default useGenerateExams;
