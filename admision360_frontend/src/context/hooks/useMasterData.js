import { useState, useEffect } from "react";
import { INITIAL_MASTER_DATA } from "../constants";
import MasterService from "../../services/MasterService";

const useMasterData = () => {
	const [masterData, setMasterData] = useState({
		...INITIAL_MASTER_DATA,
	});
	const fetchData = async () => {
		const [ubigeo, majors, family, academicPeriods] = await Promise.all([
			MasterService.getUbigeo(),
			MasterService.getMajors(),
			MasterService.getFamily(),
			MasterService.getAcademicPeriods(),
		]);
		setMasterData({
			ubigeo,
			majors,	
			family,
			academicPeriods,
		});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return masterData;
};

export default useMasterData;
