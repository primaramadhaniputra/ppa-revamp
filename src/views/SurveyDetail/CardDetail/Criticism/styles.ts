import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Container = styled(Grid).attrs({
	container: true,
})`
	gap: 16px;
	flex-direction: column;
	&::after {
		display: block;
		content: "";
		width: 100%;
		background-color: blue;
		margin: 14px 0 24px;
		border: 1px solid #8b8a8a;
	}
	&:last-child::after {
		display: none;
	}
`;

// export const HeaderText = styled(Text).attrs({
// 	variant: "h4",
// })`
// 	font-weight: 500;
// 	font-size: 14px;
// 	line-height: 24px;
// 	color: #000000;
// 	${mediaQueries.md} {
// 		font-size: 16px;
// 	}
// `;

export const ValueText = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 21px;
	${mediaQueries.md} {
		font-size: 14px;
	}
`;

export const DateText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	line-height: 21px;
	color: #8b8a8a;
	width: max-content;
	${mediaQueries.md} {
		font-size: 14px;
	}
`;
