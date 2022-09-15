import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

interface IProps {
	activeTab?: boolean;
}

export const Wrapper = styled.div``;

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
	margin-top: 10px;
	padding: 5px 10px;
	background-color: white;
	${mediaQueries.md} {
		padding: 5px 30px;
	}
	${mediaQueries.lg} {
		margin-top: 0;
	}
`;

export const WrapperTitle = styled(Grid).attrs({
	container: true,
})`
	margin-top: 20px;
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
	}
`;
export const WrapperTable = styled(Grid)`
	margin-top: 20px;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
	}
`;

export const TitleText = styled(Text).attrs({
	variant: "h3",
})`
	font-weight: ${fontWeights.bold};
	font-size: 18px;
	${mediaQueries.md} {
		font-size: 22px;
	}
`;
