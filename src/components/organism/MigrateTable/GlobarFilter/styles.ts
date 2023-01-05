import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { breakpoints } from "utils/styles";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	@media (max-width: ${breakpoints.md}) {
		flex-direction: column;
		align-items: flex-start;
		& label {
			min-width: 50px !important;
		}
	}
`;

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
	@media (max-width: ${breakpoints.md}) {
		width: 100%;
		& input {
			width: 100%;
		}
	}
`;

export const ContainerGlobalSearch = styled(Grid).attrs({ container: true })`
	align-items: center;
	gap: 10px;
	& * {
		font-family: ${fontFamilies.poppins};
	}
	@media (max-width: ${breakpoints.md}) {
		flex-direction: column;
		width: 100%;
		align-items: flex-start;
	}
`;

export const ContainerButton = styled(Grid).attrs({
	container: true,
})`
	min-width: 150px;
	@media (max-width: ${breakpoints.md}) {
		order: 2;
		width: 100%;
	}
`;

export const ContainerInput = styled(Grid).attrs({
	container: true,
})`
	align-items: center;
	gap: 5px;
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
		width: 100%;
	}
	@media (max-width: ${breakpoints.md}) {
		width: 100%;
	}
`;
