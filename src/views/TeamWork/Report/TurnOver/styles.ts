import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const ItemContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	row-gap: 30px;
	${mediaQueries.xl} {
		display: grid;
		column-gap: 20px;
		grid-template-columns: repeat(auto-fit, minMax(600px, 1fr));
	}
`;
