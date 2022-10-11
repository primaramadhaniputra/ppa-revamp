import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid).attrs({
	container: true,
})`
	margin: 10px 0;
	column-gap: 40px;
	row-gap: 10px;
	width: 100%;

	${mediaQueries.lg} {
		width: 90%;
	}
	${mediaQueries.xl} {
		width: 80%;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	${mediaQueries.lg} {
		width: auto;
	}
`;

export const IconContainer = styled.div`
	background-color: ${colors.blue};
	width: max-content;
	border-radius: 100%;
	padding: 10px;
	cursor: pointer;
	margin-left: auto;
`;

export const Container = styled.div`
	transition: 0.3s;
`;
