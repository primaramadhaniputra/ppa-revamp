import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

interface IProps {
	activeSubMenu?: boolean;
}

export const Wrapper = styled.div<IProps>`
	background-color: ${colors.primary};
	color: white;
	padding: 8.5px 25px;
	font-family: ${fontFamilies.poppins};
	display: grid;
	grid-template-columns: 1fr 50px;
	${mediaQueries.lg} {
		grid-template-columns: 50px 1fr 110px;
		padding: 0 50px;
	}
	${mediaQueries.xl} {
		padding: 0 100px;
	}
`;

export const ContainerLogo = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: space-between;
`;
export const ContainerUser = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	position: relative;
	cursor: pointer;
	${mediaQueries.lg} {
		gap: 5px;
		order: 3;
	}
`;
export const ContainerLinks = styled.div`
	margin-top: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	grid-column: span 2;
	${mediaQueries.lg} {
		flex-direction: row;
		margin-top: 0;
		gap: 25px;
		grid-column: span 1;
	}
`;

export const UserOverFlay = styled.div`
	position: absolute;
	top: 40px;
	background-color: ${colors.primary};
	right: 0;
	left: -50px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	${mediaQueries.lg} {
		left: 0;
	}
`;

export const UserOverlayText = styled(Text).attrs({
	variant: "h4",
})`
	font-size: 12px;
	font-weight: ${fontWeights.semi};
	padding: 10px;
`;

export const SingleLink = styled(Grid).attrs({
	container: true,
})`
	gap: 10px;
	padding-bottom: 15px;
	border-bottom: 1px solid white;
	flex-direction: column;
	justify-content: center;
	${mediaQueries.lg} {
		border-bottom: none;
		padding-bottom: 0;
		position: relative;
		padding: 15px 2px;
		transition: 0.3s;
		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
`;

export const Styledtext = styled.p`
	font-size: 14px;
`;

export const ContainerSubmenu = styled.div<IProps>`
	display: flex;
	flex-direction: column;
	gap: 15px;
	display: ${(props) => (props.activeSubMenu ? "inherit" : "none")};
	${mediaQueries.lg} {
		background-color: ${colors.primary};
		position: absolute;
		top: ${(props) => (props.activeSubMenu ? "45px" : "70px")};
		left: 0;
		right: -100px;
		border-radius: 5px;
		transition: 0.3s;
		display: inherit;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
		z-index: ${(props) => (props.activeSubMenu ? "999" : "-999")};
	}
`;

export const StyledTextSubmenu = styled.p`
	font-size: 14px;
	${mediaQueries.lg} {
		padding: 15px;
		transition: 0.3s;
		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
`;
