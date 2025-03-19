import { Container } from "./styles";
import EmptyIcon from "../../icons/EmptyIcon";
import PropTypes from "prop-types";

const EmptyView = ({ description }) => {
	return (
		<Container>
			<div className="ico">
				<EmptyIcon />
			</div>
			<p className="description">{description}</p>
		</Container>
	);
};

EmptyView.propTypes = {
	description: PropTypes.string.isRequired,
};

export default EmptyView;
