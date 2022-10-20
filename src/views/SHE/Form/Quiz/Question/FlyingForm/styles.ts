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

export const InputContainer = styled.div`
	padding: 30px 30px;
	display: flex;
	flex-direction: column;
	gap: 30px;
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

export const AnswerWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
	gap: 20px;
`;

export const Answer = styled.div`
	display: flex;
	align-items: center;
	& > p {
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 10px;
		font-family: ${fontFamilies.poppins};
		font-size: 13px;
	}
	& :nth-child(1) {
		font-weight: ${fontWeights.bold};
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
	}
	& :nth-child(2) {
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		flex: 1;
	}
`;
