import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const HeaderTextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.form`
	padding: 30px 50px;
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
