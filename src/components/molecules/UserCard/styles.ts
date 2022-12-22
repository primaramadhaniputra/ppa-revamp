import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

export const Container = styled.div`
	display: flex;
	border-radius: 5px;
	overflow: hidden;
	width: 100%;
	max-width: 430px;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
	& .userIcon {
		background-color: ${colors.blue};
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 150px;
	}
	& .userDesc {
		color: white;
		background-color: ${colors.primary};
		padding: 10px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;

		& p {
			font-family: ${fontFamilies.poppins};
			border-top: 2px solid white;
			padding-top: 10px;
		}
	}
`;
