import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

interface IWrapperImageInput {
	type?: string;
}

export const Wrapper = styled.div<IWrapperImageInput>`
	${mediaQueries.lg} {
		min-height: 900px;
		background: ${(props) =>
			props.type === "login4" || props.type === "login41"
				? `linear-gradient(135deg,${colors.primary} 0%,#0693e3 100%)`
				: "url(/images/bg.jpeg)"};
		height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
`;

export const WrapperImageInput = styled.div<IWrapperImageInput>`
	${mediaQueries.lg} {
		display: flex;
		padding: 100px;
		padding-right: ${(props) => (props.type ? "345px" : "100px")};
		padding-left: ${(props) => (props.type ? "100px" : "345px")};
		height: 100%;
		align-items: center;
	}
`;

export const FooterContainer = styled.div`
	${mediaQueries.lg} {
		display: none;
	}
`;
