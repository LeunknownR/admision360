/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useSegmentedUbigeo = ({ ubigeo, departmentId, provinceId }) => {
	const [provinces, setProvinces] = useState([]);
	const [districts, setDistricts] = useState([]);
	useEffect(() => {
		setProvinces(
			departmentId > 0 ? ubigeo.provinces.filter(province => province.departmentId === departmentId) : []
		);
		setDistricts(
			provinceId > 0 ? ubigeo.districts.filter(district => district.provinceId === provinceId) : []
		);
	}, [departmentId, provinceId]);
	return {
		departments: ubigeo.departments,
		provinces,
		districts,
	};
};

export default useSegmentedUbigeo;
