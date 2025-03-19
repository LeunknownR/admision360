import { createContext } from "react";
import PropTypes from "prop-types";
import { INITIAL_MASTER_DATA } from "./constants";
import useMasterData from "./hooks/useMasterData";

export const AppContext = createContext({
	masterData: { ...INITIAL_MASTER_DATA },
});
const AppContextProvider = ({ children }) => {
	const masterData = useMasterData();
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