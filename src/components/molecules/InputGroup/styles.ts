import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const Wrapper = styled.div`
	display: flex;
`;

export const StyledLabel = styled.label`
	border: 1px solid rgba(0, 0, 0, 0.25);
	padding: 10px;
	border-right: 0;
	border-radius: 3px 0 0 3px;
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	font-weight: ${fontWeights.medium};
`;
export const StyledInput = styled.input`
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 0 3px 3px 0;
	outline: none;
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	padding: 0 10px;
	width: 100%;
`;
