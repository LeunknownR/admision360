import { Navigate } from "react-router-dom";
import useAuthenticated from "../hooks/useAuthenticated";
import AppRoutes from "./AppRoutes";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
	const isAuthenticated = useAuthenticated();
	console.log(isAuthenticated);
	if (isAuthenticated === null) return null;
	if (!isAuthenticated) return children;
	return <Navigate to={AppRoutes.administrationPanel} />;
};
PublicRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PublicRoute;