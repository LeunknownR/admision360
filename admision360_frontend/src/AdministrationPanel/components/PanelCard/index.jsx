import PropTypes from "prop-types";
import { Container } from "./styles";

const PanelCard = ({ icon, title, link }) => {
	return (
		<Container to={link}>
			<div className="icon">{icon}</div>
			<h4>{title}</h4>
		</Container>
	);
};
PanelCard.propTypes = {
	icon: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};


export default PanelCard;