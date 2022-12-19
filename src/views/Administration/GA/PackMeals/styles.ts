import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 15px;
	grid-template-columns: repeat(auto-fit, minMax(245px, 1fr));
	margin: 20px 0;
`;

export const CountContainer = styled.div`
	background-color: #40e0d0;
	padding: 15px;
	border-radius: 5px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
	color: white;
	display: flex;
	flex-direction: column;
	gap: 5px;
	align-items: center;
	flex: 1;
`;
