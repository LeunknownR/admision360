import { ViewContainer } from "../../components/styles";
import ViewHeader from "../../components/ViewHeader";
import AppRoutes from "../../router/AppRoutes";
import BackLink from "../../components/BackLink";
import EmptyView from "../../components/EmptyView";
import DownloadLink from "../../components/DownloadLink";
import { useState } from "react";
import ApplicantBundleForm from "./ApplicantBundleForm";

const QualifyExamsView = () => {
	const [qualifiedExamsLink, setQualifiedExamsLink] = useState(null);
	return (
		<ViewContainer>
			<BackLink to={AppRoutes.administrationPanel} />
			<ViewHeader
				title="CALIFICACIÓN DE EXÁMENES DE ADMISIÓN"
				description="Califica los exámenes de admisión de los postulantes"
			/>
			{qualifiedExamsLink ? (
				<DownloadLink
					text="calificaciones_postulantes.pdf"
					url={qualifiedExamsLink}
					isDownload
				/>
			) : (
				<>
					<EmptyView description="Sin registro de calificación del periodo académico seleccionado" />
					<ApplicantBundleForm
						setQualifiedExamsLink={setQualifiedExamsLink}
					/>
				</>
			)}
		</ViewContainer>
	);
};

export default QualifyExamsView;
