import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const DateText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	color: #a9abac;
	& span {
		font-weight: ${fontWeights.bold};
		font-size: 18px;
		${mediaQueries.md} {
			font-size: 22px;
		}
	}
`;
