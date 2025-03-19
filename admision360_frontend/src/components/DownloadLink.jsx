import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.li`
	margin: 0;
	&,
	a {
		color: var(--primary);
	}
`;
const DownloadLink = ({ text, url, isDownload = false }) => {
	return (
		<Container>
			<a
				href={url}
				target="_blank"
				download={isDownload ? text : undefined}
			>
				{text}
			</a>
		</Container>
	);
};

DownloadLink.propTypes = {
	text: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	isDownload: PropTypes.bool,
};

export default DownloadLink;
