import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const SelectContainer = styled(Grid).attrs({
	container: true,
	gap: 5,
	flexDirection: "column",
})`
	min-width: 400px;
	& * {
		font-family: ${fontFamilies.poppins};
		font-size: 12px;
	}
`;

export const ButtonDowload = styled.button`
	background: ${colors.primary};
	border-radius: 3px;
	border: none;
	padding: 9px 10px;
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.medium};
	font-size: ${fontSizing.xs.fontSize};
	color: white;
	min-width: 197px;
	transition: 0.3s;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	&:hover {
		transform: translateY(-3px);
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
	}
`;
