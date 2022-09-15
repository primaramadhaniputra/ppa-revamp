import styled from "styled-components";

export const ChartWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.3);
	min-height: 100vh;
`;

export const Chart = styled.div`
	max-width: 850px;
	margin: 50px auto 0;
	background-color: white;
	padding: 15px;
	border-radius: 5px;
`;
