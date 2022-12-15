import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: 13px;
	font-weight: ${fontWeights.bold};
`;
