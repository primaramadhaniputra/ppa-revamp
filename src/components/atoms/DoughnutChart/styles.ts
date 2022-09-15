import { Card, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled(Card)`
	width: 100%;
	margin: auto;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
`;
export const DonatContainer = styled.div`
	max-width: 450px;
	margin: auto;
`;
export const Container = styled(Grid).attrs({
	container: true,
	gap: 20,
	justifyContent: "center",
})`
	margin-top: 30px;
`;

export const DataContainer = styled(Grid).attrs({
	container: true,
	flexDirection: "column",
	gap: 7,
})`
	flex: 1;
	text-align: center;
	max-width: 200px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	padding: 10px 20px;
	& :nth-child(1) {
		font-weight: ${fontWeights.bold};
	}
	& :nth-child(2) {
		color: ${colors.white};
		background-color: ${colors.orange};
		padding: 5px 0;
		border-radius: 50px;
		font-size: ${fontSizing.md.fontSize};
	}
`;
