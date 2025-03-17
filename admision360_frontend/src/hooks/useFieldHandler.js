const useFieldHandler = ({ form, setForm, errors, setErrors }) => {
	function setField(field, value, afterSet = () => {}) {
		if (value === form[field]) return;
		setForm(prev => ({
			...prev,
			[field]: value,
		}));
		if (setErrors)
			setErrors(prev => ({
				...prev,
				[field]: null,
			}));
		afterSet();
	}
	function setFieldError(field, error) {
		if (error === errors[field]) return;
		if (setErrors)
			setErrors(prev => ({
				...prev,
				[field]: error,
			}));
	}
	function getFieldHandler(field, afterSet) {
		return {
			value: form[field],
			set: value => setField(field, value, afterSet),
			error: errors && setErrors ? {
				value: errors[field],
				set: error => setFieldError(field, error),
			} : null,
		};
	}
	return getFieldHandler;
};

export default useFieldHandler;
