import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: center;
	font-family: ${fontFamilies.poppins};
	margin: 10px 0;
	padding: 0 10px;
	width: 100%;
	position: relative;
`;

export const WrapperTotalText = styled.div`
	display: flex;
	gap: 20px;
	background-color: ${colors.orange};
	color: #333;
	padding: 10px 10px;
	border-radius: 5px;
`;

export const TotalText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize};
	font-weight: ${fontWeights.semi};
`;
