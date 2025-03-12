import PropTypes from "prop-types";
import { Container } from "./styles";

const Button = ({ text, disabled, onClick }) => {
	return (
		<Container
			type="button"
			data-role="button"
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</Container>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
