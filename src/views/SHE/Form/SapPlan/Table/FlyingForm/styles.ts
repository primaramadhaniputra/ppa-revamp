import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const InputContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	height: 50vh;
`;

export const StyledLabel = styled.label`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.semi};
	font-size: ${fontSizing.sm.fontSize};
`;

export const Styledinput = styled.input`
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background-color: ${colors.blueSky};
	padding: 7px 7px;
	outline: none;
	border-radius: 5px;
	font-family: ${fontFamilies.poppins};
	&:focus {
		border: 1px solid rgba(0, 0, 0, 0.3);
	}
`;

export const InputWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
	column-gap: 30px;
	row-gap: 20px;
	margin: 5px 0;
`;

export const SingleInputContainer = styled(Grid).attrs({
	container: true,
})`
	flex-direction: column;
	gap: 10px;
`;
