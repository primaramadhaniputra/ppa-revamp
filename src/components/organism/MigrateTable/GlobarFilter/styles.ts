import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";

export const ContainerShow = styled(Grid).attrs({
	container: true,
})`
	gap: 10px;
	align-items: center;
	& * {
		font-family: ${fontFamilies.poppins};
	}
	& label {
		font-size: 14px;
		@media (max-width: 500px) {
			min-width: 50px;
		}
	}
	& input {
		/* width: 50px; */
		font-size: 12px;
		outline: none;
		border-radius: 2px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		padding: 1px 5px;
	}
`;

export const ContainerGlobalSearch = styled(Grid).attrs({ container: true })`
	align-items: center;
	gap: 10px;
	& * {
		font-family: ${fontFamilies.poppins};
	}
	& label {
		font-size: 14px;
		min-width: 50px;
	}
	& input {
		outline: none;
		border-radius: 2px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		padding: 1px 5px;
		font-size: 12px;
	}
`;
