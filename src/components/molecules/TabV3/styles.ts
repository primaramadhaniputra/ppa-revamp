import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

interface IProps {
	activeTab?: boolean;
}

export const TabContainer = styled(Grid).attrs({
	container: true,
})`
	gap: 15px;
	padding: 0 10px;
	background-color: rgb(247, 247, 248);
	border-top: 2px solid #e1e2e1;
	border-bottom: 2px solid #e1e2e1;
`;

export const TabText = styled.p<IProps>`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	cursor: pointer;
	color: #bcbdbf;
	border-bottom: ${(props) => (props.activeTab ? `2px solid ${colors.orange}` : `2px solid white`)};
	color: ${(props) => (props.activeTab ? "black" : "#bcbdbf")};
	font-weight: ${(props) => (props.activeTab ? fontWeights.bold : fontWeights.regular)};
	padding: 7px 0;
	${mediaQueries.md} {
		font-size: 15px;
		padding: 7px 10px;
	}
`;
