import { Container } from "./styles";
import PropTypes from "prop-types";

const ViewHeader = ({ title, subtitle }) => {
	return (
		<Container>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</Container>
	);
};
ViewHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default ViewHeader;
