import ViewHeader from "../components/ViewHeader";
import { ViewContainer } from "../components/styles";
import ExamIcon from "../icons/ExamIcon";
import CalificationIcon from "../icons/CalificationIcon";
import PanelCard from "./components/PanelCard";
import { PanelCardList } from "./components/styles";
import AppRoutes from "../router/AppRoutes";

const PANEL_CARDS = [
	{
		icon: <ExamIcon />,
		title: "Generar exámenes",
		link: AppRoutes.generateExams,
	},
	{
		icon: <CalificationIcon />,
		title: "Calificar exámenes",
		link: AppRoutes.qualifyExams,
	},
];
const AdministrationPanelView = () => {
	return (
		<ViewContainer>
			<ViewHeader
				title="PANEL DE ADMINISTRACIÓN"
				subtitle="Administra aspectos acerca del proceso de examen de admisión"
			/>
			<PanelCardList>
				{PANEL_CARDS.map((card) => (
					<PanelCard
						key={card.link}
						{...card}
					/>
				))}
			</PanelCardList>
		</ViewContainer>
	);
};

export default AdministrationPanelView;
