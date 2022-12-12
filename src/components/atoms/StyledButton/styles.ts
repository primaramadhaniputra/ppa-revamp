import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const StyledButton = styled.button`
	background: ${colors.primary};
	border-radius: 3px;
	width: 100%;
	border: none;
	/* padding: 10px 0; */
	padding: 5px 10px;
	font-family: ${fontFamilies.poppins};
	font-style: normal;
	font-weight: ${fontWeights.regular};
	font-size: ${fontSizing.xs.fontSize};
	text-align: center;
	color: white;
	transition: 0.3s;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	&:hover {
		transform: translateY(-3px);
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
	}
`;
