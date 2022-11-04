import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const TabContainer = styled.div`
	display: flex;
`;

export const TabText = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: ${fontFamilies.poppins};
	border: 1px solid rgba(0, 0, 0, 0.1);
	padding: 10px 0;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
		transition: 0.3s;
	}
`;

export const StyledText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.sm.fontSize};
	font-weight: ${fontWeights.semi};
`;
