import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const WrapperTable = styled.div`
	overflow-x: scroll;
	background-color: #fff;
	::-webkit-scrollbar {
		width: 0px;
		height: 5px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	}
`;

export const TABLE = styled.table`
	font-family: ${fontFamilies.poppins};
	width: 100%;
	text-align: center;
	border-collapse: collapse;
	font-size: ${fontSizing.md.fontSize};

	& td {
		padding: 20px;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	& tr th {
		min-width: 150px;
		padding: 20px;
	}

	& tbody {
		font-family: ${fontFamilies.poppins};
		font-style: normal;
		font-size: 12px;
		${mediaQueries.md} {
			font-size: 14px;
		}
	}

	& thead th {
		font-style: normal;
		font-weight: ${fontWeights.semi};
		font-size: 12px;
		line-height: 21px;
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 0.1);
		text-align: center;
		vertical-align: middle;
		background-color: ${colors.blue};
		color: white;
		${mediaQueries.md} {
			font-size: 16px;
		}
	}
`;
