import PropTypes from "prop-types";
import { Label } from "../styles";
import { Container, Input } from "./styles";
import { HandlerFieldPropType } from "../../common-prop-types";
import ErrorMessage from "../ErrorMessage";

const TextField = ({
	type = "text",
	label,
	placeholder,
	handler,
	disabled = false,
	maxLength = 255,
	styles = {},
}) => {
	return (
		<Container 
			className={handler.error.value ? "error" : ""}
			{...styles}>
			<Label>{label}</Label>
			<Input
				type={type}
				placeholder={placeholder}
				value={handler.value}
				onChange={e => handler.set(e.target.value)}
				maxLength={maxLength}
				disabled={disabled}
			/>
			<ErrorMessage error={handler.error.value} />
		</Container>
	);
};
TextField.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	handler: HandlerFieldPropType,
	disabled: PropTypes.bool,
	styles: PropTypes.object,
};

export default TextField;
