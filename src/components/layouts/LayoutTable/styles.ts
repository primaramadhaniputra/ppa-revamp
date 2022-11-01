import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Card)`
	margin-top: 20px;
	padding: 0;
	border-radius: 3px;
	background-color: white;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	padding: 10px;
	${mediaQueries.sm} {
		padding: 0;
	}
	${mediaQueries.md} {
		padding: 15px;
	}
`;
