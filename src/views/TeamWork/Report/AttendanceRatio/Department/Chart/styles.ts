import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div``;

export const ChartWrapper = styled.div`
	width: 100%;

	${mediaQueries.xl} {
		width: 50%;
	}
`;
