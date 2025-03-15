import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: ${({ w = "100%" }) => w};
	max-width: ${({ maxw = "100%" }) => maxw};
	&.error {
		[data-role="display"] {
			border-color: var(--error);
			[role="end-adornment"] {
				background-color: var(--error);
			}
		}
	}
`;
export const Display = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--primary);
	border-radius: 5px;
	padding-left: 20px;
	cursor: pointer;
	[role="end-adornment"] {
		background-color: var(--primary);
		padding: 10px 20px;
		color: var(--secondary);
	}
`;
export const Input = styled.input`
	font-size: 16px;
	border-radius: 5px;
	border: 1px inset var(--primary);
	padding: 10px 15px;
`;
