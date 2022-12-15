import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	${mediaQueries.md} {
		padding: 10px 50px;
	}
`;
export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	font-weight: ${fontWeights.bold};
`;
