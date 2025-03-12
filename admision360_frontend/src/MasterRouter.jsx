import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginView from "./Login/LoginView";
import ApplicantInscriptionView from "./ApplicantInscription/ApplicantInscriptionView";

const MasterRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={<LoginView />}
				/>
				<Route
					path="/inscripcion"
					element={<ApplicantInscriptionView />}
				/>
				<Route path="*" element={<Navigate to="/login"/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default MasterRouter;
