import styled from "styled-components";

export const Label = styled.label`
	font-size: 16px;
	font-weight: 600;
	color: var(--quaternary);
	&.medium {
		font-size: 15px;
		font-weight: 400;
	}
`;
export const Title = styled.h2`
	font-size: 25px;
	font-weight: 700;
	color: var(--quaternary);
	margin: 0;
	margin-bottom: ${({ mb }) => mb};
`;
export const TitleSection = styled.h3`
	font-size: 22px;
	font-weight: 700;
	color: var(--primary);
	margin: 0;
	margin-bottom: ${({ mb }) => mb};
`;
export const Flow = styled.div`
	display: flex;
	flex-direction: ${({ direction = "row" }) => direction};
	flex-wrap: wrap;
	gap: ${({ gap = "20px" }) => gap};
	align-items: ${({ align = "flex-start" }) => align};
	margin-bottom: ${({ mb = "unset" }) => mb};
	width: ${({ w = "unset" }) => w};
`;
export const Grid = styled.div`
	display: grid;
	grid-template-columns: ${({ columns = "repeat(2, 1fr)" }) => columns};
	gap: ${({ gap = "20px" }) => gap};
`;
export const ViewContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 60px 60px;
`;
