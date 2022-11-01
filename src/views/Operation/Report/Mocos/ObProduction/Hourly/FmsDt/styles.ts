import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
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

export const Wrapper = styled(Card)`
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	background-color: transparent;
	${mediaQueries.sm} {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
		padding: 20px;
		background-color: white;
	}
`;
