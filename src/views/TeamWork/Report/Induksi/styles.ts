import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const Container = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 30px;
	flex-direction: column;
	${mediaQueries.xl} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const DateText = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	color: rgba(0, 0, 0, 0.5);
	& span {
		color: grey;
		font-weight: ${fontWeights.bold};
		font-size: ${fontSizing.lg.fontSize};
	}
`;

export const InduksiContainer = styled.div`
	row-gap: 20px;
	column-gap: 70px;
	flex-direction: column;
	display: flex;
	${mediaQueries["2xl"]} {
		flex-direction: row;
	}
`;
