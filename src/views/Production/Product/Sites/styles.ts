import styled from "styled-components";

export const ChartWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	min-height: 100vh;
	transition: opacity 0.3s;
`;

export const Chart = styled.div`
	max-width: 850px;
	margin: auto;
	background-color: white;
	padding: 15px;
	border-radius: 5px;
	transition: transform 0.3s;
`;
