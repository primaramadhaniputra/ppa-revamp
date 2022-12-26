import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const IconContainer = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(auto-fit, minMax(250px, 1fr));
	margin: 30px 0;
`;

export const IconText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
`;

export const ImageContainer = styled.div`
	height: 50px;
	width: 50px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;
