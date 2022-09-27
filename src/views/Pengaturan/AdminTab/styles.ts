import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled(Card)`
	width: 100%;
	flex: 3;
	margin-top: 30px;
`;

export const SelectLabel = styled.p`
	font-family: ${fontFamilies.openSans};
	font-weight: ${fontWeights.regular};
	font-size: ${fontSizing.sm.fontSize};
	line-height: ${fontSizing.sm.lineHeight};
	color: rgba(37, 40, 43, 0.8);
`;
