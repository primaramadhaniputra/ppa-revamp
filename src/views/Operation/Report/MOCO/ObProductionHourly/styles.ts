import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled.div``;

export const TabsText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	cursor: pointer;

	padding: 5px 15px;
	font-weight: ${fontWeights.semi};
	${mediaQueries.md} {
		font-size: 14px;
	}
`;
