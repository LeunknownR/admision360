import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: ${({ w = "100%" }) => w};
	max-width: ${({ maxw = "250px" }) => maxw};
`;
export const Input = styled.input`
	font-size: 16px;
	border-radius: 5px;
	border: 1px inset var(--primary);
	padding: 10px 15px;
`;
