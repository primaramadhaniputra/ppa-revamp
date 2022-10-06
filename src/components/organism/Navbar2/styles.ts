import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

interface IProps {
	showMenu?: boolean;
}

const renderAreas = () => {
	return `"logo logo  users"
	"links links links"`;
};

export const Wrapper = styled.div<IProps>`
	background-color: ${colors.primary};
	/* margin-top: 80px; */
	color: white;
	padding: 8.5px 25px;
	font-family: ${fontFamilies.poppins};
	display: grid;
	gap: 14px;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: ${() => renderAreas()};
	${mediaQueries.lg} {
		grid-template-columns: 40px 5fr 1fr;
		grid-template-areas: "logo links links links users";
		padding: 0 100px;
	}
`;

export const ContainerLogo = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: space-between;
	grid-area: logo;
`;
export const ContainerUser = styled.div`
	display: flex;
	align-items: center;
	grid-area: users;
	max-width: 100px;
	width: 60px;
`;
export const ContainerLinks = styled.div`
	margin-top: 10px;
	width: 100%;
	grid-area: links;
	display: flex;
	flex-direction: column;
	gap: 30px;
	${mediaQueries.lg} {
		flex-direction: row;
		margin-top: 0;
		gap: 20px;
	}
	${mediaQueries.xl} {
		gap: 50px;
	}
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
		padding: 15px 5px;
		transition: 0.3s;
		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
`;

export const Styledtext = styled.p`
	font-size: 14px;
`;

export const ContainerSubmenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	${mediaQueries.lg} {
		background-color: ${colors.primary};
		position: absolute;
		top: 45px;
		left: 0;
		right: -100px;
		border-radius: 5px;
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
