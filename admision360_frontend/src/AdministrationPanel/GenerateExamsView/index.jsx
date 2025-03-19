import { ViewContainer } from "../../components/styles";
import ViewHeader from "../../components/ViewHeader";
import useAppContext from "../../context/useAppContext";
import SelectField from "../../components/SelectField";
import useExamFilters from "./hooks/useExamFilters";
import EmptyView from "../../components/EmptyView";
import QuestionBank from "./QuestionBank";
import useExams from "./hooks/useExams";
import ExamModelGroup from "./ExamModelGroup";
import AppRoutes from "../../router/AppRoutes";
import BackLink from "../../components/BackLink";

const GenerateExamsView = () => {
	const { masterData } = useAppContext();
	const examFilters = useExamFilters();
	const exams = useExams({
		academicPeriodId: examFilters.academicPeriodId.value,
	});
	return (
		<ViewContainer>
			<BackLink to={AppRoutes.administrationPanel} />
			<ViewHeader
				title="GENERACIÓN DE EXÁMENES DE ADMISIÓN"
				description="Gestiona el banco de preguntas para generar exámenes de admisión o descargar los ya existentes"
			/>
			<SelectField
				label="Periodo académico"
				handler={examFilters.academicPeriodId}
				placeholder="Elige un periodo académico"
				options={masterData.academicPeriods.map(period => ({
					value: period.id,
					display: period.name,
				}))}
			/>
			{exams.data.length > 0 ? (
				<ExamModelGroup exams={exams.data} />
			) : (
				<>
					<EmptyView description="No hay exámenes disponibles para el periodo académico seleccionado" />
					<QuestionBank
						fetchExams={exams.fetchData}
						academicPeriodId={examFilters.academicPeriodId.value}
					/>
				</>
			)}
		</ViewContainer>
	);
};

export default GenerateExamsView;
