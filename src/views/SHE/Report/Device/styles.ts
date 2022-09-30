import { Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled.div``;

export const WrapperTitle = styled(Grid).attrs({
	container: true,
})`
	margin-top: 20px;
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
		margin-top: 10px;
	}
`;
export const WrapperTable = styled(Grid)`
	${mediaQueries.md} {
		background-color: white;
		padding: 15px 40px;
	}
`;

export const TitleText = styled(Text).attrs({
	variant: "h3",
})`
	font-weight: ${fontWeights.bold};
	font-size: 18px;
	${mediaQueries.md} {
		font-size: 22px;
	}
`;
