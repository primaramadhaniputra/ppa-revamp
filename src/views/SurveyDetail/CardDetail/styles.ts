import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";

interface IProps {
	isRotateIcon?: boolean;
	isActiveContent?: boolean;
}

export const Wrapper = styled.div`
	padding: 16px;
	margin-top: 26px;
	background-color: white;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
`;

export const FilterContainer = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	padding: 4px 12px;
	width: max-content;
	border-radius: 8px;
	cursor: pointer;
	background-color: white;
	transition: 0.3s;
	border: 1px solid black;
`;

export const FilterIcon = styled.div<IProps>`
	transition: 0.3s;
	transform: ${(props) => (props.isRotateIcon ? "rotate(180deg)" : "rotate(0)")};
`;

export const FilterText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
`;

export const TabsText = styled(Text).attrs({
	variant: "p",
})<IProps>`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 14px;
	line-height: 120%;
	letter-spacing: 0.015em;
	padding: 11px 16px;
	position: relative;
	cursor: pointer;
	color: ${(props) => (props.isActiveContent ? "	#001a72" : "#757474")};
	&::after {
		display: ${(props) => (props.isActiveContent ? "block" : "none")};
		content: "";
		height: 0px;
		width: 100%;
		background-color: blue;
		position: absolute;
		bottom: 0;
		left: 0;
		border: 1px solid #001a72;
	}
`;

export const PopupNotifications = styled.p`
	padding: 2px 7px;
	border-radius: 50%;
	background: #e9a2a2;
	position: absolute;
	top: 2px;
	right: -5px;
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	line-height: 120%;
	display: flex;
	align-items: center;
`;
