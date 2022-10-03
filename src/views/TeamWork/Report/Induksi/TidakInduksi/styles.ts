import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	margin-top: 30px;
	flex: 1;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}
`;
export const Container = styled(Grid).attrs({
	container: true,
	justifyContent: "space-between",
	aligitems: "center",
})`
	background-color: #ffd4da;
	border-radius: 5px;
	color: white;
	padding: 15px 10px;
	gap: 5px;
	${mediaQueries.sm} {
		padding: 15px 25px;
	}
`;

export const TextInfo = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.md.fontSize};
	background-color: white;
	color: #ff4560;
	padding: 3px 18px;
	display: flex;
	align-items: center;
	border-radius: 5px;
`;
