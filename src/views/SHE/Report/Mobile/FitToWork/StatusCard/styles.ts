import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minMax(340px, 1fr));
	gap: 20px;
	margin: 30px 0;
`;
export const Container = styled(Card)`
	display: flex;
	padding: 0;
	overflow: hidden;
	width: 100%;
	box-shadow: 0px 1px 3px ${colors.blue};
	${mediaQueries.lg} {
		width: auto;
	}
`;

export const Title = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing["xl"].fontSize};
	text-align: center;
`;
export const TitleNumber = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing["4xl"].fontSize};
	text-align: center;
	display: flex;
	align-items: center;
	flex: 1;
`;
