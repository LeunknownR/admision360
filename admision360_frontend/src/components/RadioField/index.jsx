import PropTypes from "prop-types";
import { Flow, Label } from "../styles";
import RadioInput from "../RadioInput";
import { HandlerFieldPropType } from "../../common-prop-types";
import ErrorMessage from "../ErrorMessage";

const RadioField = ({ label, handler, options }) => {
	return (
		<Flow direction="column">
			<Label>{label}</Label>
			<Flow>
				{options.map(({ display, value }) => (
					<RadioInput
						key={value}
						display={display}
						handler={handler}
						value={value}
					/>
				))}
			</Flow>
			<ErrorMessage error={handler.error.value} />
		</Flow>
	);
};
RadioField.propTypes = {
	label: PropTypes.string,
	handler: HandlerFieldPropType,
	options: PropTypes.array,
};

export default RadioField;
