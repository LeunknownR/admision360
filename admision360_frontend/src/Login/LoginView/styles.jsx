import styled from "styled-components";

export const Container = styled.section`
	display: grid;
	place-items: center;
	flex-grow: 1;
	padding: 40px 60px;
`;
export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	padding: 50px 80px;
	border-radius: 10px;
	border: 1px inset var(--primary);
	width: 30%;
	max-width: 280px;
	[data-role=button] {
		width: 100%;
	}
`;
export const CardFields = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 20px;
	width: 100%;
`;
export const CardHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
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
