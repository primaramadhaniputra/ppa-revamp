import { Text } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const HeaderText = styled(Text).attrs({
	variant: "h4",
})`
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	color: #000000;
	${mediaQueries.md} {
		font-size: 16px;
	}
`;
