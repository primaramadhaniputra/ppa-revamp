import { Card, fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const SelectContainer = styled.div`
	position: relative;
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

export const FileContainer = styled.div`
	width: 100%;
	@media (min-width: 470px) {
		width: auto;
	}
	background-color: ${colors.orange};
	color: white;
	display: block;
	font-weight: ${fontWeights.bold};
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.md.fontSize};
	padding: 5px 15px;
	border-radius: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
	& label {
		cursor: pointer;
	}
	& :nth-child(1) {
		font-size: 30px;
	}
`;

export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Wrapper = styled(Card)`
	margin-top: 20px;
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	background-color: transparent;
	${mediaQueries.sm} {
		margin-top: 10px;
	}
`;

export const WrapperTitle = styled(Grid).attrs({
	container: true,
})`
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	${mediaQueries.md} {
		background-color: white;
		padding: 10px 15px;
	}
`;
export const WrapperTable = styled(Grid)`
	margin-top: 20px;
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
