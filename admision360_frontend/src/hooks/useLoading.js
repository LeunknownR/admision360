import { useState } from "react";

const useLoading = () => {
	const [isLoading, setIsLoading] = useState(false);
	function show() {
		setIsLoading(true);
	}
	function hide() {
		setIsLoading(false);
	}
	return { isLoading, show, hide };
};

export default useLoading;