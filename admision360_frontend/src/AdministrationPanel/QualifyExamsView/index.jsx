import { ViewContainer } from "../../components/styles";
import ViewHeader from "../../components/ViewHeader";
import AppRoutes from "../../router/AppRoutes";
import BackLink from "../../components/BackLink";

const QualifyExamsView = () => {
	return (
		<ViewContainer>
			<BackLink to={AppRoutes.administrationPanel} />
			<ViewHeader
				title="CALIFICACIÓN DE EXÁMENES DE ADMISIÓN"
				description="Califica los exámenes de admisión de los postulantes"
			/>
		</ViewContainer>
	);
};

export default QualifyExamsView;
