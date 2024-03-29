import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface IProps {
	isActive?: boolean;
}

export const Wrapper = styled(Card)<IProps>`
	cursor: pointer;
	margin-top: 20px;
	grid-column-start: initial;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	grid-row: ${(props) => (props.isActive ? "1" : "initial")};
	background-color: white;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	padding: 15px;
	${mediaQueries.lg} {
		grid-column-start: ${(props) => (props.isActive ? "span 2" : "initial")};
	}
	${mediaQueries.xl} {
		grid-column-start: ${(props) => (props.isActive ? "span 3" : "initial")};
	}
`;

export const DataWrapper = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: minMax(200px, 1fr);
	& > div {
		margin: 0;
		padding: 0 !important;
	}
	${mediaQueries.lg} {
		grid-template-columns: repeat(2, minMax(200px, 1fr));
	}
	${mediaQueries.xl} {
		grid-template-columns: repeat(3, minMax(200px, 1fr));
	}
`;
