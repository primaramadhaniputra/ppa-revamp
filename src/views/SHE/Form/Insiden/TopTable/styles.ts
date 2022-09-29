import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const HoverP = styled.p`
	cursor: pointer;
	transition: 0.2s;
	${mediaQueries.md} {
		font-size: 16px;
	}
	&:hover {
		background-color: ${colors.orange};
	}
`;
