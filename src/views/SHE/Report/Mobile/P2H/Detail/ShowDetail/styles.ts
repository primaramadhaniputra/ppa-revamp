import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const Table1 = styled.table`
	& tr,
	& td,
	& th {
		border: 1px solid rgba(0, 0, 0, 0.1);
		vertical-align: middle;
		text-align: center;
	}
	& th {
		font-weight: ${fontWeights.bold};
	}

	& td,
	& th {
		padding: 10px;
		font-family: ${fontFamilies.poppins};
		font-size: 13px;
		line-height: 18px;
	}
`;
