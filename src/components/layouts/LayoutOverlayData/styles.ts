import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing } from "utils/styles";

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
	flex-direction: row;
	gap: 20px;
	max-width: 1000px;
	margin: auto;
	background-color: white;
	transition: 0.3s;
	/* overflow-x: scroll; */
	max-height: calc(100vh - 70px);
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
	border-radius: 3px;
	::-webkit-scrollbar {
		height: 5px;
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: ${colors.blue};
	}
`;

export const ContainerChildren = styled(Grid).attrs({})`
	/* overflow-x: scroll; */
	::-webkit-scrollbar {
		height: 5px;
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: ${colors.blue};
	}
`;

export const Title = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.lg.fontSize};
`;

export const ContainerTitle = styled.div`
	padding: 10px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;
