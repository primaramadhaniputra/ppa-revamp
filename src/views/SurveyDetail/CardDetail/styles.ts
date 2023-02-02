import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: red;
	padding: 16px;
	margin-top: 36px;
	background: #ffffff;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
`;

export const FilterContainer = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	padding: 4px 12px;
	border: 1px solid #000000;
	width: max-content;
	border-radius: 8px;
	margin-left: auto;
	cursor: pointer;
`;

export const FilterText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
`;
