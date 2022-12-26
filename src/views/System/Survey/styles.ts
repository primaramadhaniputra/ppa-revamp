import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing } from "utils/styles";

export const StyledText = styled.p`
	font-size: ${fontSizing.sm.fontSize};
	color: ${colors.primary};
	cursor: pointer;
	font-style: italic;
	font-family: ${fontFamilies.poppins};
`;
