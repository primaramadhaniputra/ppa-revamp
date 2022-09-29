import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	padding: 0 10px;
	transition: opacity 0.3s;
	min-height: 100vh;
`;

export const Container = styled.div`
	background-color: white;
	height: max-content;
	margin-top: 70px;
	width: 100%;
	max-width: 1200px;
	padding: 20px 10px;
`;
