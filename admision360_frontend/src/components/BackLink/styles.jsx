import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	text-decoration: none;
	color: var(--primary);
	font-weight: 600;
`;
