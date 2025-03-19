import Button from "../../../components/Button";
import FileField from "../../../components/FileField";
import { Flow } from "../../../components/styles";
import useQuestionBankForm from "../hooks/useQuestionBankForm";
import useGenerateExams from "../hooks/useGenerateExams";
import PropTypes from "prop-types";

const QuestionBank = ({ fetchExams, academicPeriodId }) => {
	const generateExamForm = useQuestionBankForm();
	const generateExams = useGenerateExams({ academicPeriodId, generateExamForm, fetchExams });
	return (
		<Flow w="50%" maxw="600px" alignSelf="center" mt="30px">
			<FileField
				label="Banco de preguntas (en formato .csv)"
				handler={generateExamForm.questionsBankFilename}
				accept=".csv"
			/>
			<Button
				text="Generar exámenes"
				onClick={generateExams.action}
				disabled={generateExams.isLoading}
			/>
		</Flow>
	);
};
QuestionBank.propTypes = {
	fetchExams: PropTypes.func.isRequired,
	academicPeriodId: PropTypes.string.isRequired,
};

export default QuestionBank;
