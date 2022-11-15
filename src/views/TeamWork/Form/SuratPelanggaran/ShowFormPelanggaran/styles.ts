import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const StyledLabel = styled.label`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	font-size: ${fontSizing.xs.fontSize};
	min-width: 70px;
`;
export const B = styled.b`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	font-size: ${fontSizing.xs.fontSize};
	display: block;
	margin: 30px 0;
`;
