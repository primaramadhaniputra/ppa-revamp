import { fontFamilies } from "@hudoro/neron";
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
