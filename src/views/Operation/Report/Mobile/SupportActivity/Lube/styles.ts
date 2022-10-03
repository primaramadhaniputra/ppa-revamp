import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 10px 10px;
	flex-direction: column;
	${mediaQueries.lg} {
		flex-direction: row;
	}
`;

export const TableWrapper = styled(Card)`
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	flex: 5;
	background-color: transparent;
`;
