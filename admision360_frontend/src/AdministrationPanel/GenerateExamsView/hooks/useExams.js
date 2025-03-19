import { useState } from "react";
import { useEffect } from "react";
import ExamService from "../../../services/ExamService";

const useExams = ({ academicPeriodId }) => {
	const [exams, setExams] = useState([]);
	const fetchData = async () => {
		const exams = await ExamService.getExams(academicPeriodId);
		setExams(exams);
	};
	useEffect(() => {
		if (academicPeriodId > 0) 
			fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [academicPeriodId]);
	return { fetchData, data: exams };
};

export default useExams;
