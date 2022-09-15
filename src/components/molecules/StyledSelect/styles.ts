import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

export const StatusContainer = styled(Grid)`
	background-color: ${colors.blueSky};
	position: relative;
	padding: 0 10px;
	border-radius: 3px;
	& label {
		line-height: 0;
		font-size: 12px;
		color: ${colors.darkGrey};
		font-family: ${fontFamilies.poppins};
	}
	& > div :nth-child(1) {
		background-color: transparent !important;
		border: none !important;
	}
	& svg {
		display: none;
	}
	/* & div > div > div svg {
        display: block !important;
    } */
`;

export const ArrowDown = styled.div`
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 10px solid #000;
	position: absolute;
	right: 12px;
	top: 34px;
`;
