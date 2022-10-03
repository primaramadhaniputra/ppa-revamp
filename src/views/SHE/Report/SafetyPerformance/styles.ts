import styled from "styled-components";
import { fontFamilies, Grid, Text } from "@hudoro/neron";
import { colors, fontWeights, mediaQueries } from "utils/styles";

export const Container = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
	margin-top: 20px;
	${mediaQueries.md} {
		background-color: white;
		padding: 10px 15px;
		margin-top: 10px;
	}
	${mediaQueries.xl} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const TabsContainer = styled(Grid).attrs({
	container: true,
})`
	color: ${colors.orange};
	display: flex;
	border-radius: 50px;
	align-self: stretch;
	box-sizing: border-box;
	flex-direction: row;
	align-items: center;
	${mediaQueries.xl} {
		flex-direction: row;
	}
`;

export const StyledText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	cursor: pointer;
	padding: 5px 10px;
	border-radius: 5px;
	display: flex;
	background-color: ${colors.orangeGrey};
	flex: 1;
	justify-content: center;
	${mediaQueries.md} {
		padding: 5px 50px;
	}
	&.active {
		background-color: ${colors.orange};
		font-weight: ${fontWeights.bold};
		color: white;
	}
`;

export const CartWrapper = styled.div`
	gap: 20px;
	${mediaQueries.md} {
		grid-template-columns: repeat(auto-fit, minMax(500px, 1fr));
		display: grid;
	}
`;

export const WrapperTable = styled(Grid)`
	${mediaQueries.md} {
		background-color: white;
		padding: 30px 40px;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
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
