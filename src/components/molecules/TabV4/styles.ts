import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

interface IProps {
	activeTab?: boolean;
}

export const TabsContainer = styled(Grid).attrs({
	container: true,
})`
	flex-direction: column;
	flex: 1;
`;

export const TabText = styled.p<IProps>`
	font-family: ${fontFamilies.poppins};
	cursor: pointer;
	background-color: ${(props) => (props.activeTab ? colors.primary : "white")};
	color: ${(props) => (props.activeTab ? "white" : "black")};
	padding: 10px 20px;
	font-weight: ${(props) => (props.activeTab ? fontWeights.bold : fontWeights.regular)};
	border: 1px solid #e5e6e5;
`;
