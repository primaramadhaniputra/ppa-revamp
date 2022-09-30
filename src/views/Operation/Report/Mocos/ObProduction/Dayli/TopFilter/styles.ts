import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const TextYear = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.lg.fontSize};
	color: rgba(0, 0, 0, 0.5);
	& span {
		font-weight: ${fontWeights.bold};
		font-size: ${fontSizing["4xl"].fontSize};
	}
`;
