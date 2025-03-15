

const useFieldHandler = ({ form, setForm, errors, setErrors }) => {
	function setField(field, value) {
		setForm(prev => ({
			...prev,
			[field]: value,
		}));
		setErrors(prev => ({
			...prev,
			[field]: null,
		}));
	}
	function setFieldError(field, error) {
		setErrors(prev => ({
			...prev,
			[field]: error,
		}));
	}
	function getFieldHandler(field) {
		return {
			value: form[field],
			set: value => setField(field, value),
			error: {
				value: errors[field],
				set: error => setFieldError(field, error),
			},
		};
	}
	return getFieldHandler;
};

export default useFieldHandler;
