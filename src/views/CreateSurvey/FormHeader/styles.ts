import { Text, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	font-family: ${fontFamilies.poppins};
	outline: none;
	&::placeholder {
		color: black;
	}
`;

export const StyledText = styled(Text)`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
`;

export const StyledTextArea = styled.textarea`
	min-width: 115px;
	max-width: 96%;
	background: transparent;
	border: none;
	outline: none;
`;
