import { Card, fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const SelectContainer = styled.div`
	margin-top: 10px;
	position: relative;
	& * {
		font-family: ${fontFamilies.poppins};
	}
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
`;

export const ArrowDown = styled.div`
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 10px solid #000;
	position: absolute;
	right: 9px;
	top: 34px;
`;

export const TabsContainer = styled.div`
	margin: 15px 0 0 0;
	display: flex;
	flex-wrap: wrap;
	row-gap: 5px;
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
	${mediaQueries.md} {
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
export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 4px;
	justify-content: center;
`;
