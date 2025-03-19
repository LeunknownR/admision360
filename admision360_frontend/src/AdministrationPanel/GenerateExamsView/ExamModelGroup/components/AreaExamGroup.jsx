import PropTypes from "prop-types";
import ExamModel from "./ExamModel";
import { AreaTitle } from "../styles";
import { Flow } from "../../../../components/styles";

const AreaExamGroup = ({ area, models }) => {
	return (
		<Flow direction="column">
			<AreaTitle>{area}</AreaTitle>
			{models.map(model => (
				<ExamModel key={model.id} {...model}/>
			))}
		</Flow>
	);
};
AreaExamGroup.propTypes = {
	area: PropTypes.string.isRequired,
	models: PropTypes.array.isRequired,
};

export default AreaExamGroup;