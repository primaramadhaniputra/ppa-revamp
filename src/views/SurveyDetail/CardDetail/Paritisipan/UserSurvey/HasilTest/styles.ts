import { Text } from "@hudoro/neron";
import styled from "styled-components";

export const Container = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	padding: 16px 32px;
	display: grid;
	grid-template-columns: 36px 1fr;
	gap: 18px;
	margin-top: 24px;
`;

export const IconContainer = styled.div`
	background: #016670;
	border-radius: 5px;
	padding: 9px 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: max-content;
`;

export const Title = styled(Text).attrs({
	variant: "h4",
})`
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	color: #000000;
	margin-top: 3px;
`;

export const Content = styled.article`
	margin-top: 34px;
`;
