import styled from "styled-components";

interface IPropsModal {
	isOpen?: boolean;
}

export const ModalOverlay = styled.div<IPropsModal>`
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${(props) => (props.isOpen ? "999" : "-999")};
	opacity: ${(props) => (props.isOpen ? "1" : "0")};
	transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
	cursor: pointer;
`;

export const ModalContent = styled.div<IPropsModal>`
	background-color: white;
	width: max-content;
	border-radius: 5px;
	transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-30px)")};
	transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const ModalHeader = styled.div`
	padding: 12px;
	text-align: center;
	border-bottom: 1.8px solid #cecfe7;
`;

export const ModalBody = styled.div`
	/* padding: 24px; */
`;
