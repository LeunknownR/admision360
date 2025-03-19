import Button from "../../components/Button";
import FileField from "../../components/FileField";
import { Flow } from "../../components/styles";
import useApplicantBundleForm from "./hooks/useApplicantBundleForm";
import useQualifyExams from "./hooks/useQualifyExams";
import PropTypes from "prop-types";

const ApplicantBundleForm = ({ setQualifiedExamsLink }) => {
	const applicantBundleForm = useApplicantBundleForm();
	const qualifyExams = useQualifyExams({ applicantBundleForm, setQualifiedExamsLink });
	return (
		<Flow
			w="50%"
			maxw="600px"
			alignSelf="center"
			mt="30px"
		>
			<FileField
				label="Archivo de identificación de postulantes (en .dbf)"
				handler={applicantBundleForm.identificationFilename}
				accept=".dbf"
			/>
			<FileField
				label="Archivo de respuestas de los postulantes (en .dbf)"
				handler={applicantBundleForm.answersFilename}
				accept=".dbf"
			/>
			<Button
				text="Calificar exámenes"
				onClick={qualifyExams.action}
				disabled={qualifyExams.isLoading}
			/>
		</Flow>
	);
};
ApplicantBundleForm.propTypes = {
	setQualifiedExamsLink: PropTypes.func.isRequired,
};

export default ApplicantBundleForm;
