import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Container = styled.div`
	margin-top: 28px;
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;
	${mediaQueries.lg} {
		grid-template-columns: 405px 1fr;
	}
`;
