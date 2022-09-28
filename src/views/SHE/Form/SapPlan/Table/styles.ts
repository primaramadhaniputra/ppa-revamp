import { Card } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled(Card)`
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	flex: 5;
	background-color: transparent;
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
