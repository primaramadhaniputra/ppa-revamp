import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 40px;
	${mediaQueries.md} {
		padding: 10px;
	}
`;

export const Input = styled.input``;
export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	font-weight: ${fontWeights.bold};
`;
