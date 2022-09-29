import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Card)`
	margin-top: 30px;
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	background-color: transparent;
	${mediaQueries.sm} {
		background-color: white;
		padding: 20px;
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
	}
`;
