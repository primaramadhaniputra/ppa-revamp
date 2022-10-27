import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Title = styled.p`
	font-family: ${fontFamilies.openSans};
	font-weight: ${fontWeights.extraBold};
`;
export const Description = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize};
	max-width: 500px;
	line-height: ${fontSizing.xs.lineHeight};
`;
