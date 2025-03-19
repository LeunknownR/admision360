import PropTypes from "prop-types";
import DownloadLink from "../../../../components/DownloadLink";
import { AreaTitle } from "../styles";
import { Flow } from "../../../../components/styles";

const AreaExamGroup = ({ area, models }) => {
	return (
		<Flow direction="column">
			<AreaTitle>{area}</AreaTitle>
			{models.map(model => (
				<DownloadLink
					key={model.id}
					text={`Modelo ${model.model}`}
					url={model.examUrl}
				/>
			))}
		</Flow>
	);
};
AreaExamGroup.propTypes = {
	area: PropTypes.string.isRequired,
	models: PropTypes.array.isRequired,
};

export default AreaExamGroup;
