import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";

export const SelectContainer = styled(Grid).attrs({
	container: true,
	gap: 5,
	flexDirection: "column",
})`
	& * {
		font-family: ${fontFamilies.poppins};
		font-size: 12px;
	}
	& input {
	}
`;
