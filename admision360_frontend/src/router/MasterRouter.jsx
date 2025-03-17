import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginView from "../Login/LoginView";
import ApplicantInscriptionView from "../ApplicantInscription/ApplicantInscriptionView";
import AdministrationPanelView from "../AdministrationPanel/AdministrationPanelView";
import AppRoutes from "./AppRoutes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ExamGenerationView from "../AdministrationPanel/ExamGenerationView";
import QualifyExamsView from "../AdministrationPanel/QualifyExamsView";

const MasterRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoute>
							<LoginView />
						</PublicRoute>
					}
				/>
				<Route
					path="/inscripcion"
					element={<ApplicantInscriptionView />}
				/>
				<Route
					path="/admin/*"
					element={
						<PrivateRoute>
							<AdministrationPanelView />
						</PrivateRoute>
					}
				/>
				<Route
					path="/admin/generar-examenes"
					element={
						<PrivateRoute>
							<ExamGenerationView />
						</PrivateRoute>
					}
				/>
				<Route
					path="/admin/calificar-examen"
					element={
						<PrivateRoute>
							<QualifyExamsView />
						</PrivateRoute>
					}
				/>
				<Route
					path="*"
					element={<Navigate to={AppRoutes.login} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MasterRouter;
