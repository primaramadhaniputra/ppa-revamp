import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing } from "utils/styles";

export const SelectContainer = styled.div`
	margin-top: 10px;
	position: relative;
	& * {
		font-family: ${fontFamilies.poppins};
	}
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
`;

export const ArrowDown = styled.div`
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 10px solid #000;
	position: absolute;
	right: 9px;
	top: 34px;
`;

export const TabsContainer = styled.div`
	margin: 15px 0 0 0;
	display: flex;
	flex-wrap: wrap;
	row-gap: 5px;
`;

export const TabsText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 13.5px;
	cursor: pointer;
	padding: 10px;
	border-radius: 3px;
	color: black;
`;
