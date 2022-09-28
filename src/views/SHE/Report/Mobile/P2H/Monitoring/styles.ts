import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Card)`
	margin-top: 30px;
	padding: 0;
	box-shadow: none;
	border-radius: 3px;
	flex: 5;
	${mediaQueries.sm} {
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
		padding: 20px;
	}
`;

export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

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
