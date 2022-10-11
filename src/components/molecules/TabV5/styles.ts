import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const TabsContainer = styled.div`
	margin: 15px 0 0 0;
	display: flex;
	flex-wrap: wrap;
	column-gap: 25px;
	row-gap: 15px;
`;

export const TextWrapper = styled(Card)`
	padding: 0;
	border-radius: 3px;
`;

export const TabsText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 13.5px;
	cursor: pointer;
	padding: 10px;
	border-radius: 3px;
	color: black;
`;
