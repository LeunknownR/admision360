import { useState } from "react";
import useFieldHandler from "../../../hooks/useFieldHandler";

const useExamFilters = () => {
	const [form, setForm] = useState({
		academicPeriodId: "002",
	});
	const getFieldHandler = useFieldHandler({ form, setForm });
	return {
		academicPeriodId: getFieldHandler("academicPeriodId"),
	};
};

export default useExamFilters;
