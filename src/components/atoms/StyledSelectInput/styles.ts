import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	font-weight: ${fontWeights.bold};
`;

export const SelectContainer = styled.div`
	flex: 1;

	& > div > div:first-child {
		border: none !important;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
		border-radius: 0 !important;
	}
`;
