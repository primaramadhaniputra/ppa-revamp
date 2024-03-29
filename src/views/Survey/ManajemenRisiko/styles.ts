import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.section`
	margin-top: 40px;
`;
export const DescriptionContainer = styled.article`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export const TableContainer = styled.div`
	margin-top: 24px;
	background: #ffffff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
	padding: 16px 24px;
	overflow: scroll;
`;
export const DataTable = styled.table`
	width: 100%;
	font-family: ${fontFamilies.poppins};
	& thead {
		border-bottom: 2px solid #969696;
	}
	& thead tr th {
		border-right: 2px solid #969696;
		padding: 17px;
	}
	& thead tr:nth-child(2) th {
		/* border-top:2px solid #969696 */
	}
	& tbody tr td {
		border-right: 2px solid #969696;
		padding: 17px;
		text-align: center;
		font-size: 15px;
		font-weight: 400;
		font-family: "Montserrat", sans-serif;
	}
	& tbody tr:nth-child(odd) {
		background-color: #f6f5f5;
	}
`;

export const IconContainer = styled.div`
	background: #d5e9eb;
	border-radius: 8px;
	padding: 15px;
`;

export const ButtonExport = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 10px 14px;
	gap: 4px;
	background: #0099ff;
	border-radius: 8px;
	color: #cffde1;
	border: none;
	cursor: pointer;
`;
