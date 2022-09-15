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

export const ButtonWrapper = styled(Grid).attrs({
	container: true,
})`
	flex: 1;
	min-width: 150px;
	& button {
		border-radius: 3px;
		${mediaQueries.md} {
			max-width: 150px;
		}
	}
`;
