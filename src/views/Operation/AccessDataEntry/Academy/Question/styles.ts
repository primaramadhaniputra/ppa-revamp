import { Grid } from "@hudoro/neron";
import styled from "styled-components";

export const Container = styled(Grid).attrs({
	container: true,
})`
	justify-content: flex-end;
	flex-direction: row;
	flex-wrap: nowrap;
`;
