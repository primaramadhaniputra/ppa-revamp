import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
	top: 20px;
	z-index: 999;
	background-color: white;
	display: flex;
	flex-direction: column;
`;

export const StyledButton = styled.button`
	font-size: 12px;
	font-family: ${fontFamilies.poppins};
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 15px;
	transition: 0.1s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
		color: rgba(255, 255, 255, 0.9);
	}
`;
