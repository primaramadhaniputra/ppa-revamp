import { Card, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const WrapperTitle = styled(Grid).attrs({
	container: true,
})`
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;
	${mediaQueries.md} {
		margin: 10px 0;
		background-color: white;
		padding: 15px;
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

export const Wrapper = styled(Card)`
	margin-top: 30px;
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	background-color: transparent;
	${mediaQueries.sm} {
		padding: 10px;
	}
	${mediaQueries.md} {
		background-color: white;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}
`;

export const WrapperTable = styled(Grid)`
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
	}
`;
export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 4px;
	justify-content: center;
`;
