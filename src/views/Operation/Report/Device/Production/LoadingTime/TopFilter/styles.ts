import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const TextYear = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.lg.fontSize};
	color: rgba(0, 0, 0, 0.5);
	& span {
		font-weight: ${fontWeights.bold};
		font-size: ${fontSizing["4xl"].fontSize};
	}
`;

export const Wrapper = styled(Grid).attrs({
	container: true,
})`
	gap: 10px;
	margin-top: 30px;
	width: 100%;
	${mediaQueries.md} {
		width: 80%;
		padding: 10px;
	}
`;
