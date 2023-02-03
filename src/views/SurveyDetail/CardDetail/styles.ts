import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

interface IProps {
	isRotateIcon?: boolean;
}

export const Wrapper = styled.div`
	padding: 16px;
	margin-top: 26px;
`;

export const FilterContainer = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	padding: 4px 12px;
	width: max-content;
	border-radius: 8px;
	margin-left: auto;
	cursor: pointer;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	background-color: white;
	transition: 0.3s;
	&:hover {
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
	}
	&:active {
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	}
`;

export const FilterIcon = styled.div<IProps>`
	transition: 0.3s;
	transform: ${(props) => (props.isRotateIcon ? "rotate(180deg)" : "rotate(0)")};
`;

export const FilterText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
`;
