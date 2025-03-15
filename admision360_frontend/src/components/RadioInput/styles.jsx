import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
`;
export const Radio = styled.div`
	position: relative;
	border-radius: 50%;
	--size: 20px;
	width: var(--size);
	height: var(--size);
	background-color: var(--secondary);
	border: 2px solid var(--primary);
	box-sizing: border-box;
	&.checked {
		border-width: 6px;
	}
	&.error {
		border-color: var(--error);
	}
`;
export const Display = styled.div`
	font-size: 15px;
	color: var(--quaternary);
`;