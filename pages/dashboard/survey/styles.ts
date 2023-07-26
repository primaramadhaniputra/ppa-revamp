import styled from "styled-components";

export const ModalOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContent = styled.div`
	background-color: white;
	width: max-content;
	border-radius: 5px;
`;
