import styled from "styled-components";

export const ThItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const ArrowUp = styled.div`
	width: 0;
	height: 0;
	border-left: 3px solid transparent;
	border-right: 3px solid transparent;

	border-bottom: 5px solid black;
`;

export const ArrowDown = styled.div`
	width: 0;
	height: 0;
	border-left: 3px solid transparent;
	border-right: 3px solid transparent;
	margin-top: 2px;
	border-top: 5px solid black;
`;
