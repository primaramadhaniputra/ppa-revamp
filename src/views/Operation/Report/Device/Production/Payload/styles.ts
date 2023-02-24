import styled from "styled-components";

export const DataWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	& > div {
		margin: 0;
		padding: 0 !important;
	}
`;
