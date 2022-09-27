import { Card, fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const SelectContainer = styled.div`
	margin-top: 10px;
	position: relative;
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
	& svg {
		display: none;
	}
`;

export const ArrowDown = styled.div`
	border-left: 9px solid transparent;
	border-right: 9px solid transparent;
	border-top: 9px solid #000;
	position: absolute;
	right: 15px;
	top: 34px;
`;

export const TabsContainer = styled.div`
	margin: 15px 0 0 0;
	display: flex;
	flex-wrap: wrap;
	column-gap: 25px;
`;

export const TabsText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 13.5px;
	cursor: pointer;
	padding: 10px;
	border-radius: 3px;
	color: black;
`;

export const WrapperTitle = styled(Grid).attrs({
	container: true,
})`
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
		margin-top: 5px;
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
	margin-top: 10px;
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	background-color: transparent;
	${mediaQueries.sm} {
		padding: 0;
	}
`;

export const WrapperTable = styled(Grid)`
	margin-top: 20px;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
	}
`;
