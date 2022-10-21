import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	margin: 20px 0;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Container = styled(Card)`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	${mediaQueries.sm} {
		width: auto;
		align-items: inherit;
	}
`;
