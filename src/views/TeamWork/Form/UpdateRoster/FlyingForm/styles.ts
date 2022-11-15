import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const InputContainer = styled.form`
	padding: 0px 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const StyledLabel = styled.label`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.semi};
	font-size: ${fontSizing.sm.fontSize};
	min-width: 50px;
`;
