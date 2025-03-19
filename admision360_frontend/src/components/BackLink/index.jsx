import { Container } from "./styles";
import PropTypes from "prop-types";
import BackIcon from "../../icons/BackIcon";
const BackLink = ({ to }) => {
	return (
		<Container to={to}>
			<BackIcon />
			<div>Volver</div>
		</Container>
	);
};

BackLink.propTypes = {
	to: PropTypes.string.isRequired,
};

export default BackLink;
