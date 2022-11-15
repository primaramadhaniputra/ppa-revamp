import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const StyledP = styled.label`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	font-size: ${fontSizing.xs.fontSize};
	min-width: 70px;
`;

export const DataContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	& :nth-child(1) {
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.xs.fontSize};
	}
`;

export const Table = styled.table`
	border: 1px solid #1c6ea4;
	background-color: #eeeeee;
	width: 100%;
	text-align: left;
	border-collapse: collapse;
	font-family: ${fontFamilies.poppins};
	& td,
	& th {
		border: 1px solid #aaaaaa;
		padding: 15px 2px;
		text-align: center;
		font-size: 13px;
		vertical-align: middle;
	}
	& tbody td {
		font-size: 13px;
	}

	& thead {
		background: ${colors.blue};
		color: white;
	}
`;
