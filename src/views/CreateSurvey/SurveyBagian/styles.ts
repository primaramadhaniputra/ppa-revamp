import { Card, fontFamilies } from "@hudoro/neron";
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
