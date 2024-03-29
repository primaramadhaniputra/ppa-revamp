import styled from "styled-components";
import { colors } from "utils/styles";

export const Container = styled.div`
	position: absolute;
	z-index: 999;
	right: 0;
	left: 0;
	bottom: 0;
	top: 0;
	background-color: ${colors.darkGrey};
	opacity: 0.2;
	& > div {
		position: relative;
		top: 50%;
		right: -50%;
		transform: translateX(-50%);
	}
`;

export const Wrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	& div {
		position: absolute;
		border: 4px solid ${colors.primary};
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	& div:nth-child(2) {
		animation-delay: -0.5s;
	}
	@keyframes lds-ripple {
		0% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 0;
		}
		4.9% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 0;
		}
		5% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 0px;
			left: 0px;
			width: 72px;
			height: 72px;
			opacity: 0;
		}
	}
`;
