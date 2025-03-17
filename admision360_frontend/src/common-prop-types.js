import PropTypes from "prop-types";

export const HandlerFieldPropType = PropTypes.exact({
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.bool,
		PropTypes.object,
	]).isRequired,
	set: PropTypes.func.isRequired,
	error: PropTypes.exact({
		value: PropTypes.string,
		set: PropTypes.func,
	}),
});
