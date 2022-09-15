import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div``;

export const ContentWrapper = styled.article`
	margin-top: 60px;
	padding: 30px 15px;
	background-color: #fff;
	min-height: calc(100vh - 70px);
	background-color: #f6f8fa;
	${mediaQueries.md} {
		min-height: calc(100vh - 80px);
	}
	${mediaQueries.lg} {
		min-height: calc(100vh - 90px);
		padding: 20px 100px;
		margin-top: 0px;
	}
`;
