import { useState } from "react";
import { useEffect } from "react";

const useAuthenticated = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);
	useEffect(() => {
		setIsAuthenticated(Boolean(localStorage.getItem("token")));
	}, []);
	return isAuthenticated;
};

export default useAuthenticated;
