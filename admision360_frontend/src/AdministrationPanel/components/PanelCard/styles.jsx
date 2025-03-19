import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 20px 10px;
	background-color: var(--primary);
	border: 1px solid var(--primary);
	border-radius: 5px;
	height: 120px;
	width: 200px;
	text-decoration: none;
	transition: 0.3s;
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		svg {
			height: 100%;
			width: 100%;
		}
		path {
			fill: var(--secondary);
			transition: 0.3s;
		}
	}
	h4 {
		color: var(--secondary);
		font-size: 16px;
		font-weight: 700;
		padding: 0 10px;
		text-align: center;
		margin: 0;
		transition: 0.3s;
	}
	&:hover { 
		background-color: var(--secondary);
		border-color: var(--primary);
		h4 {
			color: var(--primary);
		}
		svg path {
			fill: var(--primary);
		}
	}
`;
