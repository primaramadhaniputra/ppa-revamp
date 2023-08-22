import styled from "styled-components";

export const Switch = styled.label`
	position: relative;
	display: inline-block;
	width: 39px;
	height: 20px;

	& input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	& .slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #d9d9d9;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	& .slider:before {
		position: absolute;
		content: "";
		height: 16px;
		width: 16px;
		left: 3px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	& input:checked + .slider {
		background-color: #141bbe;
	}
	& input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}
	& input:checked + .slider:before {
		-webkit-transform: translateX(17px);
		-ms-transform: translateX(17px);
		transform: translateX(17px);
	}
	& .slider.round {
		border-radius: 34px;
	}
	& .slider.round:before {
		border-radius: 50%;
	}
`;
