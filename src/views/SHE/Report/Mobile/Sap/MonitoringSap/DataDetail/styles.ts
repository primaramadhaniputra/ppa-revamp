import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Title = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.semi};
`;
export const Description = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize};
`;
