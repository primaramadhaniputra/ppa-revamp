import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

interface IProps {
	activeTab?: boolean;
}

export const TabText = styled.p<IProps>`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	cursor: pointer;
	padding: 5px 8px;
	border-bottom: ${(props) =>
		props.activeTab ? `2px solid ${colors.orange}` : `2px solid transparent`};
	color: ${(props) => (props.activeTab ? "black" : "#bcbdbf")};
	font-weight: ${(props) => (props.activeTab ? fontWeights.bold : fontWeights.regular)};
	${mediaQueries.md} {
		font-size: 15px;
	}
`;

export const TabsWrapper = styled(Grid).attrs({
	container: true,
})`
	gap: 10px;
	margin-top: 15px;
	padding: 5px 10px;
	background-color: white;
	${mediaQueries.md} {
		padding: 5px 30px;
	}
`;

export const TableTitle = styled(Text).attrs({
	variant: "h4",
})`
	font-size: 15px;
	font-weight: ${fontWeights.bold};
	text-align: center;
	${mediaQueries.md} {
		margin-top: 15px;
	}
`;

export const TopWrapper = styled.div`
	${mediaQueries["2xl"]} {
		display: grid;
		grid-template-columns: 50% 50%;
		gap: 20px;
	}
`;
