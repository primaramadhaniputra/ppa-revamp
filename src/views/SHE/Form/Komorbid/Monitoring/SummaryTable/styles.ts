import styled from "styled-components";
import { colors } from "utils/styles";

export const P = styled.p`
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		background-color: ${colors.primary};
		color: white;
	}
`;
