import styled from "styled-components";

export const TableContainer = styled.div`
	overflow-x: auto;
	::-webkit-scrollbar {
		width: 10px;
		height: 3px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;
