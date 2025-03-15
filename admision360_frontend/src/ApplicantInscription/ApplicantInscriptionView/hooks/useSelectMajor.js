/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useSelectMajor = ({ form, majors }) => {
	const [majorSelected, setMajorSelected] = useState(null);
	useEffect(() => {
		if (!form.majorId.value) {
			setMajorSelected(null);
			return;
		}
		const majorFound = majors.find(({ id }) => id === form.majorId.value);
		form.facultyId.set(majorFound?.faculty?.id || 0);
		setMajorSelected(majorFound || null);
	}, [form.majorId.value]);
	return majorSelected;
};

export default useSelectMajor;
