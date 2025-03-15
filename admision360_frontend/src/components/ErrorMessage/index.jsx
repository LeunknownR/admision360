import { Container } from "./styles";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => {
	if (!error)
		return null;
	return (
		<Container data-role="error-message">{error}</Container>
	);
};
ErrorMessage.propTypes = {
	error: PropTypes.string.isRequired,
};

export default ErrorMessage;
