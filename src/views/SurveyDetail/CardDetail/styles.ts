import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	margin-top: 24px;
	display: grid;
	gap: 24px;
	grid-template-columns: 1fr;
	${mediaQueries.md} {
		grid-template-columns: 1fr 1fr;
	}
`;
