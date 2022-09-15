import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div``;

export const LoginWrapper = styled.form`
	min-height: calc(100vh - 64px);
	background-image: url(/images/traktor.jpeg);
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	position: relative;
	&:after {
		content: "";
		background-color: black;
		opacity: 0.4;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-position-y: -150px;
	}
`;

export const StyledCard = styled(Card)`
	max-width: 403px;
	width: 100%;
	z-index: 99;
`;

export const Title = styled.p`
	font-family: ${fontFamilies.poppins};
	font-style: normal;
	font-weight: ${fontWeights.regular};
	font-size: ${fontSizing.lg.fontSize};
	line-height: ${fontSizing.lg.lineHeight};
	text-align: center;
`;
