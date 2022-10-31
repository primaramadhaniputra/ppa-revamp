import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Table = styled.table`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize} !important;
	color: rgb(146, 146, 146);
`;

export const U = styled.u`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	display: block;
	margin-bottom: 10px;
`;

export const UWrapper = styled.div`
	margin: 20px 0 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding: 30px 5px;
`;
