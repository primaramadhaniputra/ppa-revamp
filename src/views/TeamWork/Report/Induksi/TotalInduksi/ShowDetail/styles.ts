import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const StyledP = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	font-size: ${fontSizing.md.fontSize};
	${mediaQueries.md} {
		font-weight: ${fontWeights.bold};
		font-size: ${fontSizing.lg.fontSize};
	}
`;
export const P = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: ${fontSizing.xs.fontSize};
	${mediaQueries.md} {
		font-size: ${fontSizing.md.fontSize};
	}
`;

export const DataContainer = styled.div`
	display: flex;
	gap: 10px;
	justify-content: space-between;
`;

export const Table = styled.table`
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
	& td {
		border: 1px solid rgba(0, 0, 0, 0.3);
		font-family: ${fontFamilies.poppins};
		padding: 10px;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.xs.fontSize};
		${mediaQueries.md} {
			font-size: ${fontSizing.md.fontSize};
		}
	}
`;
