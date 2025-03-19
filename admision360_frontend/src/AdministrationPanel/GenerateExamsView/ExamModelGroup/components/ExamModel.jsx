import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.li`
	margin: 0;
	&, a {
		color: var(--primary);
	}
`;
const ExamModel = ({ model, examUrl }) => {
	return (
		<Container>
			<a
				href={examUrl}
				target="_blank"
			>
				Modelo {model}
			</a>
		</Container>
	);
};

ExamModel.propTypes = {
	model: PropTypes.string.isRequired,
	examUrl: PropTypes.string.isRequired,
};

export default ExamModel;
