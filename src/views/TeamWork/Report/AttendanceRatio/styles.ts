import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 0 5px;
	justify-content: space-between;
`;

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
