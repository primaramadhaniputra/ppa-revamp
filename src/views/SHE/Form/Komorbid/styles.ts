import { Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const TableTitle = styled(Text).attrs({
	variant: "h4",
})`
	font-size: 15px;
	font-weight: ${fontWeights.bold};
	text-align: center;
	${mediaQueries.md} {
		margin-top: 15px;
	}
`;

export const TopWrapper = styled.div`
	${mediaQueries["2xl"]} {
		display: grid;
		grid-template-columns: 50% 50%;
		gap: 20px;
	}
`;
