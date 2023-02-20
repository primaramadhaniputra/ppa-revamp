import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Container = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	padding: 16px 32px;
	display: grid;
	grid-template-columns: 36px 1fr;
	gap: 18px;
`;

export const IconContainer = styled.div`
	background: #016670;
	border-radius: 5px;
	padding: 9px 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: max-content;
`;

export const Title = styled(Text).attrs({
	variant: "h4",
})`
	font-weight: 500;
	font-size: 16px;
	line-height: 30px;
	color: #000000;
	margin-top: 3px;
	${mediaQueries.md} {
		font-size: 20px;
	}
`;

export const Content = styled.article`
	margin-top: 34px;
	grid-column-start: 2;
	@media (max-width: 600px) {
		grid-column: 1 / span 2;
		margin-top: 14px;
	}
`;

export const ContentValue = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-weight: 400;
	font-size: 12px;
	line-height: 21px;
	margin-top: 16px;
	${mediaQueries.md} {
		font-size: 14px;
	}
`;
