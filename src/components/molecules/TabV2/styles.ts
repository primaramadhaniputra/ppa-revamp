import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

interface IProps {
	activeTab?: boolean;
}

export const TabsWrapper = styled(Grid).attrs({
	container: true,
})`
	background-color: white;
	column-gap: 30px;
	row-gap: 10px;
	padding: 0 10px;
	margin-top: 10px;
	${mediaQueries.md} {
		font-size: 15px;
		padding: 0 40px;
		margin-top: 0;
	}
`;

export const TabText = styled.p<IProps>`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	cursor: pointer;
	padding: 5px 8px;
	border-bottom: ${(props) =>
		props.activeTab ? `2px solid ${colors.orange}` : `2px solid transparent`};
	color: ${(props) => (props.activeTab ? "black" : "#bcbdbf")};
	font-weight: ${(props) => (props.activeTab ? fontWeights.bold : fontWeights.regular)};
	padding: 10px;
	${mediaQueries.md} {
		font-size: 15px;
	}
`;
