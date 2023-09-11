import styled from "styled-components";

interface IProps {
	isShowPopover?: boolean;
}

export const PopOver = styled.div<IProps>`
	border-radius: 6px;
	border: 1px solid var(--greyscale-30, #898aa0);
	background: #fff;
	box-shadow: 0px 16px 40px 0px rgba(154, 170, 207, 0.2);
	position: absolute;
	top: 0;
	left: 25px;
	min-width: 150px;
	padding: 12px 8px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	z-index: ${(props) => (props.isShowPopover ? "999" : "-999")};
	opacity: ${(props) => (props.isShowPopover ? "1" : "0")};
	transition: all 0.3s;
`;
