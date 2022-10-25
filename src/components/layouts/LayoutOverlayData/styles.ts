import { Grid } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	padding: 10px;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	min-height: 100vh;
	transition: 0.3s;
`;

export const Container = styled(Grid).attrs({
	container: true,
})`
	flex-direction: column;
	gap: 20px;
	max-width: 1000px;
	margin: auto;
	background-color: white;
	padding: 20px 10px;
	transition: 0.3s;
	overflow-x: scroll;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	::-webkit-scrollbar {
		height: 3px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
`;
