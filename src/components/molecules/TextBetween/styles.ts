import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { breakpoints, fontWeights } from "utils/styles";

export const TextContainer = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: 1fr 1fr;
	@media (max-width: ${breakpoints.sm}) {
		grid-template-columns: 1fr;
	}
`;

export const RightText = styled(Text).attrs({
	variant: "h4",
})`
	font-size: clamp(0.6rem, 2.5vw, 0.9rem);
	min-width: 120px;
	font-weight: ${fontWeights.regular};
	font-style: italic;
	text-decoration: underline;
`;
export const LeftText = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-size: clamp(0.5rem, 2.5vw, 0.8rem);
`;
