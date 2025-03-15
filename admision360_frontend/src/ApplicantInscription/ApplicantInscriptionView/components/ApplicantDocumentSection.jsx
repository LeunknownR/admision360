import PropTypes from "prop-types";
import ApplicantFieldSection from "../../components/ApplicantFieldSection";
import FileField from "../../../components/FileField";
import { Grid } from "../../../components/styles";

const ApplicantDocumentSection = ({ form }) => {
	return (
		<ApplicantFieldSection title="DOCUMENTOS REQUERIDOS">
			<Grid>
				<FileField
					label="Documento Nacional de Identidad: Frente y Reverso (Actualizado)"
					handler={form.dniFilename}
				/>
				<FileField
					label="Certificado de estudios concluidos"
					handler={form.studyCertificateFilename}
				/>
				<FileField
					label="Compromiso de entregar certificado de estudios en caso ingresar (SOLO 5° año de secundaria)"
					handler={form.compromiseStudyCertificateFilename}
				/>
				<FileField
					label="Certificado de estudios o constancia de estar cursando 5° año educación de secundaria"
					handler={form.documentaryProgressFiveYearFilename}
				/>
				<FileField
					label="Declaración de no tener antecedentes penales"
					handler={form.statementNotCriminalFilename}
				/>
			</Grid>
		</ApplicantFieldSection>
	);
};
ApplicantDocumentSection.propTypes = {
	form: PropTypes.object,
};

export default ApplicantDocumentSection;
