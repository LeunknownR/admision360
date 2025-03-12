const useFieldHandler = ({ form, setForm }) => {
	function setField(field, value) {
		setForm(prev => ({
			...prev,
			[field]: value,
		}));
	}
	function getFieldHandler(field, afterSet) {
		return {
			value: form[field],
			set: value => {
				setField(field, value);
				if (afterSet)
					afterSet(value)
			},
		};
	}
	return getFieldHandler;
};

export default useFieldHandler;
