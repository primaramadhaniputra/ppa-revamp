import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 24px;
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
`;

export const StyledCard = styled(Card)`
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 15px;
	padding: 18px;
	flex: 1;
`;

export const CardTitle = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: #000000;
`;
