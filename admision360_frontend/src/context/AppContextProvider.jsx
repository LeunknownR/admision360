import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { INITIAL_MASTER_DATA } from "./constants";
import MasterService from "../services/MasterService";

export const AppContext = createContext({
	masterData: { ...INITIAL_MASTER_DATA },
});
const AppContextProvider = ({ children }) => {
	const [masterData, setMasterData] = useState({
		...INITIAL_MASTER_DATA,
	});
	const fetchData = async () => {
		const [ubigeo, majors, family] = await Promise.all([
			MasterService.getUbigeo(),
			MasterService.getMajors(),
			MasterService.getFamily(),
		]);
		setMasterData({
			ubigeo,
			majors,
			family,
		});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<AppContext.Provider value={{ masterData }}>
			{children}
		</AppContext.Provider>
	);
};
AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppContextProvider;