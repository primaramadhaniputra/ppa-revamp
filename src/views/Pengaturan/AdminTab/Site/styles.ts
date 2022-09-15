import { Grid } from "@hudoro/neron";
import styled from "styled-components";

export const Container = styled(Grid).attrs({
	container: true,
	flexDirection: "column",
	gap: 5,
})`
	position: relative;
	& svg {
		display: none;
	}
`;

export const ArrowDown = styled.div`
	width: 0;
	height: 0;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-top: 9px solid rgba(0, 0, 0, 0.7);
	position: absolute;
	right: 15px;
	bottom: 15px;
`;
