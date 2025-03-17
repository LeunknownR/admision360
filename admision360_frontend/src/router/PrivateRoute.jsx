import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppRoutes from "./AppRoutes";
import useAuthenticated from "../hooks/useAuthenticated";

const PrivateRoute = ({ children }) => {
	const isAuthenticated = useAuthenticated();
	console.log(isAuthenticated);
	if (isAuthenticated === null) return null;
	if (isAuthenticated) return children;
	return <Navigate to={AppRoutes.login} />;
};
PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
