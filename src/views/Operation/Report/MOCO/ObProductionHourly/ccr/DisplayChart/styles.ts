import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	padding: 10px;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
	position: absolute;
	top: 240px;
	z-index: 999;
	background-color: white;
	right: 0;
	left: 0;
	margin: auto;
	${mediaQueries.md} {
		max-width: 900px;
	}
`;
