import PropTypes from "prop-types";
import { Flow, Label } from "../styles";
import { Value } from "./styles";

const Field = ({
	label, value
}) => {
	return (
		<Flow>
			<Label>{label}</Label>
			<Value>{value}</Value>
		</Flow>
	);
}
Field.propTypes = {
	label: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Field;