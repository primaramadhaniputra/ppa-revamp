import { Grid } from "@hudoro/neron";
import styled from "styled-components";

export const Container = styled(Grid).attrs({
	container: true,
	gap: 20,
})`
	& .chartContainer {
		overflow-x: scroll;
		::-webkit-scrollbar {
			width: 1px;
			height: 3px;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #c9c9c9;
		}

		@media (max-width: 100px) {
			max-width: 100%;
		}
	}
`;
