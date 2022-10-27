import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const StyledP = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	font-size: ${fontSizing.xs.fontSize};
	min-width: 135px;
`;

export const DataContainer = styled.div`
	display: flex;
	& :nth-child(2) {
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.xs.fontSize};
	}
`;

export const P = styled.p`
	font-family: ${fontFamilies.poppins};
	line-height: 15px;
`;

export const Table = styled.table`
	border: 1px solid #1c6ea4;
	background-color: #eeeeee;
	width: 100%;
	text-align: left;
	border-collapse: collapse;
	& td,
	& th {
		border: 1px solid #aaaaaa;
		padding: 3px 2px;
		text-align: center;
	}
	& tbody td {
		font-size: 13px;
	}

	& thead {
		background: ${colors.blueSky};
	}
`;
