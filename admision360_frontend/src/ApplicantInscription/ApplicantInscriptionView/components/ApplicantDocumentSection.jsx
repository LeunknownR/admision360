import PropTypes from "prop-types";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import FileField from "../../../components/FileField";
import { Grid } from "../../../components/styles";

const ApplicantDocumentSection = ({ form }) => {
	return (
		<ApplicantFieldSection title="DOCUMENTOS REQUERIDOS">
			<Grid>
				<FileField
					label="Documento Nacional de Identidad: Frente y Reverso (en .pdf)"
					handler={form.dniFilename}
					accept=".pdf"
				/>
				<FileField
					label="Certificado de estudios concluidos (en .pdf)"
					handler={form.studyCertificateFilename}
					accept=".pdf"
				/>
				<FileField
					label="Declaración de no tener antecedentes penales (en .pdf)"
					handler={form.statementNotCriminalFilename}
					accept=".pdf"
				/>
				{!form.studiesCompleted.value && (
					<>
						<FileField
							label="Compromiso de entregar certificado de estudios en caso ingresar (SOLO 5° año de secundaria) (en .pdf)"
							handler={form.compromiseStudyCertificateFilename}
							accept=".pdf"
						/>
						<FileField
							label="Certificado de estudios o constancia de estar cursando 5° año educación de secundaria (en .pdf)"
							handler={form.documentaryProgressFiveYearFilename}
							accept=".pdf"
						/>
					</>
				)}
			</Grid>
		</ApplicantFieldSection>
	);
};
ApplicantDocumentSection.propTypes = {
	form: PropTypes.object,
};

export default ApplicantDocumentSection;
