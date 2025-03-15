import PropTypes from "prop-types";
import { Container, Display, Radio } from "./styles";
import { HandlerFieldPropType } from "../../common-prop-types";

const RadioInput = ({ display, value, handler }) => {
	function getClassName() {
		const classList = [];
		if (handler.error.value) classList.push("error");
		if (handler.value === value) classList.push("checked");
		return classList.join(" ");
	}
	return (
		<Container onClick={() => handler.set(value)}>
			<Radio className={getClassName()}/>
			<Display>{display}</Display>
		</Container>
	);
};
RadioInput.propTypes = {
	display: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
	handler: HandlerFieldPropType,
};

export default RadioInput;
