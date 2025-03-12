import PropTypes from "prop-types";
import { Container, Fields } from "./styles";
import { TitleSection } from "../../../components/styles";

const ApplicantFieldGroup = ({ title, children }) => {
	return (
		<Container>
			<TitleSection>{title}</TitleSection>
			<Fields>{children}</Fields>
		</Container>
	);
};
ApplicantFieldGroup.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default ApplicantFieldGroup;
