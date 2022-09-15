import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const StyledTitle = styled(Text)`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.semi};
	line-height: ${fontSizing.md.lineHeight};
	font-size: ${fontSizing.md.fontSize};
	${mediaQueries.lg} {
		font-size: ${fontSizing.lg.fontSize};
	}
`;
