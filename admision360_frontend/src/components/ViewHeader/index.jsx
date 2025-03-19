import { Container } from "./styles";
import PropTypes from "prop-types";

const ViewHeader = ({ title, description }) => {
	return (
		<Container>
			<h2>{title}</h2>
			<h3>{description}</h3>
		</Container>
	);
};
ViewHeader.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default ViewHeader;
