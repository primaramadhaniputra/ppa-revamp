import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.xs.fontSize};
`;

export const StyledInput = styled.input`
	outline: none;
	border: none;
	padding: 2px 5px;
	font-family: ${fontFamilies.poppins};
	font-size: 12.5px;
	font-weight: ${fontWeights.semi};
	background-color: transparent;
	outline: none;
	cursor: pointer;
	flex: 1;
	&::placeholder {
		font-family: ${fontFamilies.poppins};
	}
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
