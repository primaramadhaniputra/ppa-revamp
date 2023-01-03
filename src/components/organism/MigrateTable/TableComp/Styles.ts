import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const Table = styled.table`
	width: 100%;
	margin: 20px 0;
	text-align: center;
	overflow: hidden;
	& * {
		font-family: ${fontFamilies.poppins};
	}
	& input {
		font-size: 12px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-radius: 3px;
		margin-top: 5px;
		padding: 1px 10px;
		outline: none;
	}
	& th {
		border-top: 1px solid rgba(0, 0, 0, 0.25);
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		border-right: 1px solid rgba(0, 0, 0, 0.25);
		padding: 10px;
		font-weight: ${fontWeights.medium};
		min-width: min-content;
	}
	& th:last-child {
		border-right: 0;
	}

	& tbody tr td {
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		padding: 15px 5px;
		font-size: 13px;
		border-top: 1px solid rgba(0, 0, 0, 0.25);
		border-right: 1px solid rgba(0, 0, 0, 0.25);
	}

	& tbody tr td:last-child {
		border-right: 0;
	}

	& tbody tr:nth-child(odd) {
		background-color: ${colors.blue};
		color: white;
	}
`;
