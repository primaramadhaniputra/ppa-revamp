import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
	align-items: flex-end;
	gap: 20px;
	justify-content: space-between;
	& > div {
		width: 100%;
	}
	& > div > div {
		width: 100%;
	}

	${mediaQueries.md} {
		& > div {
			width: auto;
		}
		& > div > div {
			width: auto;
		}
	}
`;

export const ButtonWrapper = styled.div``;
