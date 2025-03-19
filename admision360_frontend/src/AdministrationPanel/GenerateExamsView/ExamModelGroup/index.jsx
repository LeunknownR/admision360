import { ExamTitle } from "../styles";
import AreaExamGroup from "./components/AreaExamGroup";
import PropTypes from "prop-types";
import { Flow, Grid } from "../../../components/styles";

const ExamModelGroup = ({ exams }) => {
	return (
		<Flow direction="column" w="100%" maxw="750px" alignSelf="center">
			<ExamTitle>EXÁMENES</ExamTitle>
			<Grid columns="repeat(3, 1fr)" w="100%">
				{exams.map(exam => (
					<AreaExamGroup key={exam.area} {...exam}/>
				))}
			</Grid>
		</Flow>
	);
};
ExamModelGroup.propTypes = {
	exams: PropTypes.array.isRequired,
};

export default ExamModelGroup;