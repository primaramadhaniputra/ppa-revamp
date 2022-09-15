import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: ${colors.blueSky};
	padding: 5px 10px;
	border-radius: 3px;
`;

export const StyledLabel = styled.label`
	font-family: ${fontFamilies.poppins};
	font-style: normal;
	font-weight: ${fontWeights.regular};
	font-size: 12px;
	color: black;
`;

export const StyledInput = styled.input`
	outline: none;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	font-family: ${fontFamilies.poppins};
	font-size: 12.5px;
	font-weight: ${fontWeights.semi};
	background-color: transparent;
	&::placeholder {
		font-family: ${fontFamilies.poppins};
	}
	&:focus {
		background: ${colors.blueSky};
		outline: 1px solid ${colors.primary};
	}
`;

export const ArrowDown = styled.div`
	border-left: 9px solid transparent;
	border-right: 9px solid transparent;
	border-top: 9px solid #000;
	position: absolute;
	right: 15px;
	top: 27px;
`;

export const DropdownMenuContainer = styled.div`
	position: absolute;
	left: 10px;
	background-color: white;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	width: 200px;
	border-radius: 3px;
	top: 95%;
	z-index: 99;
	overflow-y: scroll;
	max-height: 200px;
`;

export const DropdownTextAll = styled.p`
	padding: 10px;
	cursor: pointer;
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	font-weight: ${fontWeights.semi};
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	&:hover {
		background-color: ${colors.primary};
		color: white;
	}
`;
export const DropdownText = styled.p`
	padding: 10px;
	cursor: pointer;
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	font-weight: ${fontWeights.semi};
	background-color: white;
	&:hover {
		background-color: ${colors.blueSky};
		color: black;
	}
	&.active {
		background-color: ${colors.primary};
		color: white;
	}
`;
