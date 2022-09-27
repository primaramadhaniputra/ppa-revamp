import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing } from "utils/styles";

export const SelectContainer = styled.div`
	margin: 25px 0;
	position: relative;
	& * {
		font-family: ${fontFamilies.poppins};
		font-size: 12px;
	}
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
`;

export const ArrowDown = styled.div`
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 10px solid #000;
	position: absolute;
	right: 9px;
	top: 34px;
`;

export const THContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	justify-content: space-between;
	width: 100%;
`;
