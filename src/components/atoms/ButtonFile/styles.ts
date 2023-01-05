import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const FileContainer = styled.div`
	width: 100%;
	@media (min-width: 350px) {
		width: auto;
	}
	background-color: ${colors.primary};
	color: white;
	display: block;
	font-size: 14px !important;
	font-weight: ${fontWeights.bold};
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.md.fontSize};
	padding: 3px 15px;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
	& label {
		cursor: pointer;
	}
	& :nth-child(1) {
		font-size: 30px;
	}
`;
