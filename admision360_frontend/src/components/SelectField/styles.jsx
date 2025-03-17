import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: ${({ w = "100%" }) => w};
	max-width: ${({ maxw = "280px" }) => maxw};
	transition: opacity 0.1s;
	&.empty {
		[data-role="input"] div {
			color: var(--placeholder);
		}
	}
	&.disabled {
		opacity: 0.5;
		&,
		* {
			cursor: default;
			pointer-events: none;
		}
	}
	&.error {
		[data-role="input"] {
			border-color: var(--error);
		}
	}
`;
export const Input = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	color: var(--quaternary);
	font-size: 16px;
	border-radius: 5px;
	border: 1px inset var(--primary);
	padding: 10px 15px;
	outline: none;
`;
export const Wrapper = styled.div`
	position: relative;
	cursor: pointer;
`;
export const OptionWrapper = styled.ul`
	position: absolute;
	z-index: 3;
	top: 100%;
	left: 0;
	z-index: 2;
	width: 100%;
	border: 1px inset var(--primary);
	border-radius: 5px;
	list-style: none;
	margin: 0;
	margin-top: 5px;
	padding: 0;
	max-height: 250px;
	overflow-y: auto;
`;
export const Option = styled.li`
	padding: 10px 20px;
	color: var(--quaternary);
	border-radius: inherit;
	background-color: var(--secondary);
`;
