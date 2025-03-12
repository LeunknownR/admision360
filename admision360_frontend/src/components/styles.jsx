import styled from "styled-components";

export const Label = styled.label`
	font-size: 16px;
	font-weight: 600;
	color: var(--quaternary);
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
`;
export const Flow = styled.div`
	display: flex;
	flex-direction: ${({ direction = "row" }) => direction};
	gap: ${({ gap = "20px" }) => gap};
`;