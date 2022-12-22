import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const SelectContainer = styled.div`
	position: relative;
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
`;

export const WrapperStatus = styled(Grid).attrs({
	container: true,
})`
	align-items: center;
	justify-content: flex-end;
	column-gap: 30px;
	row-gap: 15px;
	margin: 20px 0;
`;

export const StatusText = styled(Text).attrs({
	variant: "h4",
})`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize};
	font-weight: ${fontWeights.bold};
	@media (max-width: 768px) {
		min-width: 70px;
	}
`;

export const BoxContainer = styled(Grid).attrs({
	container: true,
})`
	gap: 10px;
	align-items: center;
	width: 100%;
	${mediaQueries.md} {
		width: auto;
	}
`;

export const Box = styled.div`
	min-width: 80px;
	height: 17px;
	flex: 1;
`;

export const TableTitle = styled(Text).attrs({
	variant: "h4",
})`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	font-size: 15px;
	display: none;
	${mediaQueries.md} {
		display: block;
		margin: 20px 0;
		font-size: 17px;
	}
`;
