import useApplicantInscriptionValidation from "./useApplicantInscriptionValidation";

const useEnroll = ({ form }) => {
	const { validate } = useApplicantInscriptionValidation({ form });
	const enroll = () => {
		if (!validate()) return false;
		console.log(form.values);
		return true
	};
	return enroll;
};

export default useEnroll;
