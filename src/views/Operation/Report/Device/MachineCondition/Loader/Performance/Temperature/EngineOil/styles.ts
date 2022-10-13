import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const TextTable = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	padding: 10px 5px;
	${mediaQueries.md} {
		padding: 20px 5px;
	}
`;
