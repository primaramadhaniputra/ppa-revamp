import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const U = styled.u`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize};
	font-weight: ${fontWeights.medium};
`;

export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize};
	font-weight: ${fontWeights.bold};
`;
