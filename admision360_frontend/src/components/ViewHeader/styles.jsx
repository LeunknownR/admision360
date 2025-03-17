import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin: 15px 0;
	& > * {
		margin: 0;
		color: var(--quaternary);
	}
	h2 {
		font-size: 25px;
	}
	h3 {
		font-size: 15px;
		font-weight: 400;
	}
`;
