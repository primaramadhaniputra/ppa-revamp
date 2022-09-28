import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const FileContainer = styled.div`
	width: 100%;
	@media (min-width: 430px) {
		width: auto;
	}
	background-color: ${colors.orange};
	color: white;
	display: block;
	font-weight: ${fontWeights.bold};
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.md.fontSize};
	padding: 10px 15px;
	border-radius: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
	& label {
		cursor: pointer;
	}
`;

export const ThItemContainer = styled(Grid).attrs({
	container: true,
	alignItems: "center",
	justifyContent: "space-evenly",
	gap: 7,
})`
	width: 100%;
`;
