import PropTypes from "prop-types";
import { Label } from "../styles";
import { Container, Input } from "./styles";

const TextField = ({
	type = "text",
	label,
	placeholder,
	handler,
	disabled = false,
}) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Input
				type={type}
				placeholder={placeholder}
				value={handler.value}
				onChange={e => handler.set(e.target.value)}
				disabled={disabled}
			/>
		</Container>
	);
};
TextField.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	handler: PropTypes.object,
	disabled: PropTypes.bool,
};

export default TextField;
