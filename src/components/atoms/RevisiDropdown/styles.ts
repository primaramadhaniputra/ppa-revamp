import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	position: relative;
`;

export const StyledInput = styled.input`
	outline: none;
	border: none;
	border-bottom: 1.4px solid rgba(0, 0, 0, 0.1);
	padding: 5px 3px 0;
	font-size: 12px;
	width: 100%;
	background-color: transparent;
	font-family: ${fontFamilies.poppins};
	&::placeholder {
		font-family: ${fontFamilies.poppins};
		font-size: 13px;
	}
	${mediaQueries.md} {
		font-size: 14px;
	}
`;

export const ArrowDown = styled.div`
	width: 0;
	height: 0;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-top: 8px solid #b1b2b5;
	position: absolute;
	right: -5px;
	top: 17px;
	transform: rotate(-45deg);
	cursor: pointer;
`;

export const DropdownContainer = styled.div`
	position: absolute;
	z-index: 999;
	background-color: white;
	width: 100%;
	max-height: 100px;
	overflow-y: scroll;
	border-radius: 3px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
`;

export const Item = styled.p`
	padding: 8px 10px;
	cursor: pointer;
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	&:hover {
		background-color: ${colors.primary};
		color: white;
		font-weight: ${fontWeights.bold};
	}
`;
