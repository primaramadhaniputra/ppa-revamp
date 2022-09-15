import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const FormWrapper = styled.div`
	min-height: 800px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	height: calc(100vh - 64px);
	${mediaQueries.lg} {
		padding: 50px;
		justify-content: flex-start;
		box-shadow: -3px 0px 20px rgba(0, 0, 0, 0.3);
	}
`;

export const FooterContainer = styled.div`
	display: none;
	${mediaQueries.lg} {
		display: block;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
`;
