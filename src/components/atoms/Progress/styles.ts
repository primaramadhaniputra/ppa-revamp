import styled from "styled-components";

export const ProgressBar = styled.progress`
	border-radius: 8px;
	height: 10px;
	&::-webkit-progress-bar {
		border-radius: 8px;
		background-color: #dce7f5;
	}
	&::-webkit-progress-value {
		background-color: #2f88ff;
		border-radius: 8px;
	}
`;
