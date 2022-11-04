import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
	overflow-x: scroll;
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	::-webkit-scrollbar-track {
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 6px ${colors.blue};
		box-shadow: inset 0 0 6px ${colors.blue};
	}
`;

export const StyledTable = styled.table`
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	font-family: ${fontFamilies.poppins};
	& thead tr {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
	}
	& thead tr th {
		padding: 20px 5px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		font-weight: ${fontWeights.bold};
		min-width: 100px;
		cursor: pointer;
	}
	& tbody tr {
		cursor: pointer;
		&:hover {
			transition: 0.1s;
			background-color: rgba(0, 0, 0, 0.3) !important;
			color: black !important;
		}
	}
	& tbody tr td {
		padding: 20px 5px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		text-align: center;
		font-size: ${fontSizing.sm.fontSize};
	}

	& tbody tr:nth-child(even) {
		background: ${colors.blue};
		color: white;
		& td {
			border: 1px solid rgba(255, 255, 255, 0.7);
		}
	}
`;
