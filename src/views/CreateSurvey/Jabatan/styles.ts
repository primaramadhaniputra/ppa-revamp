import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const PerusahaanContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	font-family: ${fontFamilies.poppins} !important;
	border-right: 1px solid #ddd;
	padding: 10px 65px 10px 10px;
`;
export const JabatanContainer = styled.div`
	flex: 1;
	font-family: ${fontFamilies.poppins} !important;
`;
