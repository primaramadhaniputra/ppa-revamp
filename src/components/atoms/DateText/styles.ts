import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const DateToText = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	color: #969799;
	display: flex;
	align-items: center;
	gap: 10px;
	& span {
		font-weight: ${fontWeights.bold};
		font-size: 16px;
	}
	${mediaQueries.md} {
		font-size: 14px;
		& span {
			font-weight: ${fontWeights.bold};
			font-size: 23px;
		}
	}
`;
