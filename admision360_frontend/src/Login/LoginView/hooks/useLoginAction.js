const useLoginAction = ({ form }) => {
	function login() {
		console.log(form.values);
	}
	return login;
}
	
export default useLoginAction;