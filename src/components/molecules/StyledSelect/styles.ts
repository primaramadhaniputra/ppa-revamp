import styled from "styled-components";

export const Label = styled.label`
	position: relative;
	display: inline-block;
	width: 120px;
	height: 34px;

	& input {
		display: none;
	}

	& .slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #3c3c3c;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}
	& .slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	& input:checked + .slider {
		background-color: #0e6eb8;
	}

	& input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	& input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(85px);
	}

	& .slider:after {
		content: "Yes";
		color: white;
		display: block;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		font-size: 10px;
		font-family: Verdana, sans-serif;
	}

	& input:checked + .slider:after {
		content: "No";
	}
`;
