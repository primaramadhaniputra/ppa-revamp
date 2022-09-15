import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	margin-bottom: 30px;
	display: none;
	${mediaQueries.lg} {
		display: block;
		width: 250px;
		display: flex;
		flex-direction: column;
		gap: 5px;
		position: relative;
		left: 0;
		/* margin-left: auto; */
	}
`;
