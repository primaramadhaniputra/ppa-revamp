import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	border: 1px solid black;
	border-radius: 10px;
	padding: 16px;
	width: 100%;
	/* height: max-content; */
	margin-bottom: 6px;
`;

export const UserName = styled(Text).attrs({
	variant: "h4",
})`
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
`;
export const UserJob = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	color: rgba(37, 40, 43, 0.6);
`;
