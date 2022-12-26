import { Grid } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled(Grid).attrs({
	container: true,
	gap: 3,
	justifyContent: "center",
})`
	& > :nth-child(1) {
		background-color: #4a7abc;
	}
	& > :nth-child(2) {
		background-color: #25b78a;
	}
	& > :nth-child(3) {
		background-color: #f05d5d;
	}
`;

export const IconContainer = styled(Grid).attrs({
	container: true,
	justifyContent: "center",
	alignItems: "center",
})`
	border-radius: 2px;
	flex: 1;
	padding: 3px 0;
`;
