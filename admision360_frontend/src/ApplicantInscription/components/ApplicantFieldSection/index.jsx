import PropTypes from "prop-types";
import { Container, Fields } from "./styles";
import { TitleSection } from "../../../components/styles";

const ApplicantFieldSection = ({ title, children }) => {
	return (
		<Container>
			<TitleSection mb="15px">{title}</TitleSection>
			<Fields>{children}</Fields>
		</Container>
	);
};
ApplicantFieldSection.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default ApplicantFieldSection;
