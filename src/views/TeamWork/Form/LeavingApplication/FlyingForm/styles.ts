import { fontFamilies, Grid } from "@hudoro/neron";
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

export const Input = styled.input`
	font-family: ${fontFamilies.poppins};
`;
export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	font-weight: ${fontWeights.bold};
`;

export const CheckboxContainer = styled(Grid).attrs({
	container: true,
})`
	border: 1px solid rgba(0, 0, 0, 0.3);
	height: 40px;
	border-radius: 2px;
`;
