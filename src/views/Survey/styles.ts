import { Card, Text } from "@hudoro/neron";
import styled from "styled-components";

export const Container = styled.div`
	margin-top: 30px;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
`;

export const StyledCard = styled(Card)`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
	flex: 1;
	min-width: 240px;
`;

export const CardTitle = styled(Text).attrs({
	variant: "h4",
})``;
