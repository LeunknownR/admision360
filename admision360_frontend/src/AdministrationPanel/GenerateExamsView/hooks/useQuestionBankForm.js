import { useState } from "react";
import useFieldHandler from "../../../hooks/useFieldHandler";

const useQuestionBankForm = () => {
	const [form, setForm] = useState({
		questionsBankFilename: {
			base64: "",
			filename: "",
		},
	});
	const [errors, setErrors] = useState({
		questionsBankFilename: null
	});
	const getFieldHandler = useFieldHandler({ form, setForm, errors, setErrors, });
	return {
		questionsBankFilename: getFieldHandler("questionsBankFilename"),
	};
}

export default useQuestionBankForm;
