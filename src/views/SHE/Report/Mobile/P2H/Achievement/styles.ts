import { Card, fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

interface IProps {
	activeTab?: boolean;
}

export const Wrapper = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 10px 10px;
	flex-direction: column;
	${mediaQueries.lg} {
		flex-direction: row;
	}
`;

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

export const TableWrapper = styled(Card)`
	/* margin-top: 30px; */
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	flex: 5;
	background-color: transparent;
	/* ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    } */
`;

export const ArrowUp = styled.div`
	width: 0;
	height: 0;
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;

	border-bottom: 6px solid black;
`;

export const ArrowDown = styled.div`
	width: 0;
	height: 0;
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	margin-top: 2px;
	border-top: 6px solid black;
`;

export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
