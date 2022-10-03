import { Card, fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries, colors } from "utils/styles";

export const WrapperTitle = styled(Grid).attrs({
	container: true,
})`
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
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
	margin-top: 20px;
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	background-color: transparent;
	${mediaQueries.sm} {
		padding: 0;
	}
	${mediaQueries.md} {
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}
`;

export const WrapperTable = styled(Grid)`
	margin-top: 20px;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
	}
`;

export const FileContainer = styled.div`
	width: 100%;
	@media (min-width: 350px) {
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
export const THContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	padding: 10px 5px;
	justify-content: center;
`;

export const SelectContainer = styled.div`
	margin: 25px 0;
	position: relative;
	& * {
		font-family: ${fontFamilies.poppins};
		font-size: 12px;
	}
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
`;
