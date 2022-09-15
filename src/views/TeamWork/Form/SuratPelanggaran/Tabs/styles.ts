import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const TabsText = styled.p`
	font-family: ${fontFamilies.poppins};
	color: rgba(0, 0, 0, 0.5);
	cursor: pointer;
	font-weight: ${fontWeights.regular};
	font-size: 14px;
	padding: 0 5px 5px 5px;
	&.active {
		font-weight: ${fontWeights.bold};
		color: rgba(0, 0, 0, 1);
		border-bottom: 2px solid ${colors.orange};
	}
`;
