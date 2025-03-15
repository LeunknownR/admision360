const useFieldHandler = ({ form, setForm, errors, setErrors }) => {
	function setField(field, value, afterSet = () => {}) {
		if (value === form[field]) return;
		setForm(prev => ({
			...prev,
			[field]: value,
		}));
		setErrors(prev => ({
			...prev,
			[field]: null,
		}));
		afterSet();
	}
	function setFieldError(field, error) {
		if (error === errors[field]) return;
		setErrors(prev => ({
			...prev,
			[field]: error,
		}));
	}
	function getFieldHandler(field, afterSet) {
		return {
			value: form[field],
			set: value => setField(field, value, afterSet),
			error: {
				value: errors[field],
				set: error => setFieldError(field, error),
			},
		};
	}
	return getFieldHandler;
};

export default useFieldHandler;
