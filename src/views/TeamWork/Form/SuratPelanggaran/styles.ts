import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing } from "utils/styles";

export const SelectContainer = styled.div`
	position: relative;
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
`;

export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
