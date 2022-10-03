import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	overflow-x: scroll;
	::-webkit-scrollbar {
		width: 12px;
		height: 5px;
	}

	::-webkit-scrollbar-track {
		/* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
		/* border-radius: 10px; */
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

	& tbody tr td {
		text-align: center;
		vertical-align: middle;
		border-bottom: 1px solid #e4e4e4;
		border-top: 1px solid #e4e4e4;
		padding: 10px 5px;
		${mediaQueries.md} {
			padding: 20px 5px;
		}
	}
	& tbody tr:nth-child(odd) {
		background: ${colors.blueSky};
	}
	& tr th:nth-child(1) {
		border-left: 0;
	}

	& tbody {
		font-family: ${fontFamilies.poppins};
		font-style: normal;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.8);
		${mediaQueries.md} {
			font-size: 14px;
		}
	}

	& thead th {
		font-style: normal;
		font-weight: ${fontWeights.semi};
		font-size: 12px;
		line-height: 21px;
		color: #4a5259;
		text-align: center;
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		&.hidden {
			display: none;
		}
		text-align: center;
		vertical-align: middle;
		${mediaQueries.md} {
			font-size: 16px;
		}
	}
	& tfoot {
		font-size: 12px;
		line-height: 21px;
		${mediaQueries.md} {
			font-size: 14px;
		}
	}

	& tfoot > tr > th div label {
		text-align: start;
	}
`;

export const ThItemContainer = styled.div`
	cursor: pointer;
	min-width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
