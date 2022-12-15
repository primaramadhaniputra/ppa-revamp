import { fontFamilies, Grid, Select } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;

export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	font-weight: bold;
`;

export const Input = styled.input`
	width: 100%;
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	padding: 5px;
	outline: none;
	border: none;
	background-color: transparent;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const SelectWrapper = styled(Grid)`
	position: relative;
	& p {
		font-family: ${fontFamilies.poppins};
	}
	& > div > div:first-child {
		background-color: transparent !important;
		border: none !important;
		border-bottom: 1px solid rgba(0, 0, 0, 0.3) !important;
		border-radius: 0 !important;
		padding: 0 !important;
	}
	& input {
		font-family: ${fontFamilies.poppins};
		font-size: 14px;
		padding: 5px;
	}
	& > div > div * svg {
		display: none !important;
	}
`;

export const StyledSelect = styled(Select)``;

export const SelectIconContainer = styled.div`
	width: max-content;
	position: absolute;
	bottom: -5px;
	right: -5px;
	transform: rotate(-45deg);
`;

export const DateContainer = styled.div`
	position: absolute;
	z-index: 999;
`;
