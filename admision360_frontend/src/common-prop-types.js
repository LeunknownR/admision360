import PropTypes from "prop-types";

export const HandlerFieldPropType = PropTypes.exact({
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object]),
	set: PropTypes.func,
	error: PropTypes.exact({
		value: PropTypes.string,
		set: PropTypes.func,
	}),
})