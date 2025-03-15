import PropTypes from "prop-types";
import { Container } from "./styles";

const Button = ({ text, disabled, onClick, styles = {} }) => {
	return (
		<Container
			type="button"
			data-role="button"
			disabled={disabled}
			onClick={onClick}
			{...styles}
		>
			{text}
		</Container>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	styles: PropTypes.object,
};

export default Button;
