import styled from "styled-components";

export const Switch = styled.label`
	width: 39px;
	height: 20px;
	position: relative;
	cursor: pointer;

	& input {
		width: 0;
		height: 0;
		opacity: 0;
	}

	& .slider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #d9d9d9;
		border-radius: 34px;
		transition: 0.3s;
	}
	& .slider::before {
		content: "";
		position: absolute;
		height: 16px;
		width: 16px;
		background-color: white;
		border-radius: 50%;
		bottom: 2px;
		left: 2px;
		transition: 0.3s;
	}
	& input:checked + .slider {
		background-color: #141bbe;
	}
	& input:checked + .slider:before {
		-webkit-transform: translateX(17px);
		-ms-transform: translateX(17px);
		transform: translateX(17px);
	}
`;
