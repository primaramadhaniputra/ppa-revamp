import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface IProps {
	isActive?: boolean;
}

export const Wrapper = styled(Card)<IProps>`
	cursor: pointer;
	margin-top: 20px;
	padding: 0;
	box-shadow: none;
	background-color: transparent;
	grid-column-start: initial;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	grid-row: ${(props) => (props.isActive ? "1" : "initial")};
	${mediaQueries.lg} {
		grid-column-start: ${(props) => (props.isActive ? "span 3" : "initial")};
		background-color: white;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
		padding: 15px;
	}
`;

export const DataWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;
	& > div {
		margin: 0;
		padding: 0 !important;
	}
	${mediaQueries.lg} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;
