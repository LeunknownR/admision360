const useLoginAction = ({ form }) => {
	function login() {
		console.log(form);
	}
	return login;
}	
	
export default useLoginAction;