import { Card, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Card)`
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	background-color: transparent;
	${mediaQueries.sm} {
		padding: 0;
	}
	${mediaQueries.md} {
		background-color: white;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}
`;

export const WrapperTable = styled(Grid)`
	margin-top: 20px;
	${mediaQueries.md} {
		background-color: white;
		padding: 15px;
	}
`;
