import { Button, Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	font-family: ${fontFamilies.poppins};
	outline: none;
	&::placeholder {
		color: black;
	}
`;

export const StyledCard = styled(Card)`
	box-shadow: 0px 8px 40px 0px rgba(112, 144, 176, 0.2);
	border-radius: 8px;
	border: 2px solid #ecedff;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const StyledButtonElipse = styled(Button).attrs({
	variant: "secondary",
})`
	padding: 0;
	display: flex;
	border: none;
`;

export const PopUpContainer = styled.div`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	font-weight: 600;
	border-radius: 6px;
	border: 2px solid var(--greyscale-20, #cecfe7);
	background: #fff;
	padding: 12px 8px;
	/* Card */
	box-shadow: 0px 16px 40px 0px rgba(154, 170, 207, 0.2);
	position: absolute;
	white-space: nowrap;
`;
