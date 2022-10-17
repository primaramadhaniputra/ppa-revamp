import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid).attrs({
	container: true,
})`
	column-gap: 30px;
	row-gap: 10px;
	width: 100%;
	align-items: center;
	margin-top: 20px;
	${mediaQueries["2xl"]} {
		width: 80%;
	}
`;

export const TextYear = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.lg.fontSize};
	color: rgba(0, 0, 0, 0.5);
	& span {
		font-weight: ${fontWeights.bold};
		font-size: ${fontSizing["4xl"].fontSize};
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	${mediaQueries.xl} {
		width: auto;
	}
`;
