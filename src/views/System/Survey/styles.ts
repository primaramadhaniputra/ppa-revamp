import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Container = styled.div`
	margin-top: 30px;
	box-shadow: none;
	padding: 0;
	border-radius: 3px;
	${mediaQueries.sm} {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
		padding: 20px;
		background-color: white;
	}
`;
