import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

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
	cursor: pointer;
	height: 100%;
`;

export const WrapperTotalText = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 5px;
`;

export const TotalText = styled.p`
	font-family: ${fontFamilies.poppins};
	/* font-size: ${fontSizing.sm.fontSize}; */
	font-weight: ${fontWeights.medium};
	font-size: 18px;
	line-height: 27px;
	color: #2a2a2d;
`;
