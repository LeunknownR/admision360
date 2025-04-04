import { useState } from "react";
import useFieldHandler from "../../../hooks/useFieldHandler";

const useLoginForm = ({ setGlobalError }) => {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});
	const getFieldHandler = useFieldHandler({ form, setForm });
	function areCompleted() {
		const { username, password } = form;
		return username.length > 0 && password.length > 0;
	}
	return {
		values: form,
		username: getFieldHandler("username", () => setGlobalError(null)),
		password: getFieldHandler("password", () => setGlobalError(null)),
		completed: areCompleted(),
	};
};

export default useLoginForm;
