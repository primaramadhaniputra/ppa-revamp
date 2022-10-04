import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const PointContainer = styled(Card)`
	padding: 10px 15px;
	border-radius: 5px;
	display: flex;
	gap: 20px;
	align-items: center;
`;

export const PointDesc = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	font-weight: ${fontWeights.bold};
`;

export const PointValue = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	font-weight: ${fontWeights.semi};
	background-color: ${colors.green};
	padding: 5px 15px;
	border-radius: 5px;
	color: white;
`;
