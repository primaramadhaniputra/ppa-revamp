import { Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const RightText = styled(Text).attrs({
	variant: "h4",
})`
	font-size: clamp(0.6rem, 2.5vw, 0.9rem);
	min-width: 120px;
	font-weight: ${fontWeights.regular};
	font-style: italic;
	text-decoration: underline;
`;
