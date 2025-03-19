import { useState } from "react";
import useFieldHandler from "../../../hooks/useFieldHandler";

const useApplicantBundleForm = () => {
	const [form, setForm] = useState({
		identificationFilename: {
			base64: "",
			filename: "",
		},
		answersFilename: {
			base64: "",
			filename: "",
		},
	});
	const [errors, setErrors] = useState({
		identificationFilename: null,
		answersFilename: null,
	});
	const getFieldHandler = useFieldHandler({ form, setForm, errors, setErrors, });
	return {
		identificationFilename: getFieldHandler("identificationFilename"),
		answersFilename: getFieldHandler("answersFilename"),
	};
}

export default useApplicantBundleForm;
