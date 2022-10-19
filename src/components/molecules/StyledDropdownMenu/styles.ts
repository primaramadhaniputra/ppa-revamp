import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: white;
	padding: 5px;
	border-radius: 3px;
	width: 100%;
	gap: 5px;
`;

export const ArrowDown = styled.div`
	width: 0;
	height: 0;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-top: 8px solid #b1b2b5;
	position: absolute;
	right: 0px;
	top: 17px;
	transform: rotate(-45deg);
	cursor: pointer;
`;

export const StyledInput = styled.input`
	outline: none;
	border: none;
	padding: 2px 10px;
	font-family: ${fontFamilies.poppins};
	font-size: 12.5px;
	font-weight: ${fontWeights.semi};
	background-color: transparent;
	outline: none;
	&::placeholder {
		font-family: ${fontFamilies.poppins};
	}
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const DropdownMenuContainer = styled.div`
	position: absolute;
	left: 10px;
	background-color: white;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	width: 100%;
	border-radius: 3px;
	top: 95%;
	z-index: 99;
	overflow-y: scroll;
	max-height: 200px;
	max-width: 450px;
	::-webkit-scrollbar {
		width: 1px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.3);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.3);
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.3);
	}
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
