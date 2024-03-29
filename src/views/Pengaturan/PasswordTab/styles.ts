import { Card, Text } from "@hudoro/neron";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
	margin-top: 30px;
	max-width: 150px;
	font-size: 10px !important;
`;

export const Container = styled(Card)`
	width: 100%;
	flex: 3;
	margin-top: 30px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
`;

export const TextForgotPassword = styled(Text).attrs({
	variant: "mute",
})`
	color: rgba(0, 0, 255, 0.7);
	cursor: pointer;
`;
