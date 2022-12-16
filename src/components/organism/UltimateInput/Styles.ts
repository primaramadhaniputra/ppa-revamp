import { fontFamilies, Grid, Select } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	/* align-items: center; */
	gap: 5px;
	flex-direction: column;
`;

export const Label = styled.label`
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	font-weight: 500;
`;

export const Input = styled.input`
	width: 100%;
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	padding: 5px 10px;
	outline: none;
	border-radius: 2px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	/* border: 0; */
	/* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25); */
`;

export const SelectWrapper = styled(Grid)`
	position: relative;
	& p {
		font-family: ${fontFamilies.poppins};
	}
	& > div > div:first-child {
		background-color: transparent !important;
		border: 0 !important;
		border: 1px solid rgba(0, 0, 0, 0.3) !important;
		/* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important; */
		border-radius: 2px !important;
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
	bottom: -1px;
	right: -1px;
	transform: rotate(-45deg);
`;

export const DateContainer = styled.div`
	position: absolute;
	z-index: 999;
`;
