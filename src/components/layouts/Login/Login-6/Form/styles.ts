import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
	position: relative;
	min-height: 600px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height:100vh;
	${mediaQueries.lg} {
		height: 90%;
		max-height: 1000px;
		display: flex;
		align-items: center;
		padding-left: 50px;
		border-radius: 5px;
	}

	${mediaQueries.lg} {
		&::after {
			content: "";
			background-color: black;
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0.5;
			border-radius: 5px;
		}
	}
`;

export const Wrapper2 = styled.div`
	position: relative;
	${mediaQueries.lg} {
		background-color: white;
		border-radius: 5px;
		height: 110%;
		min-width: 400px;
		z-index: 99;
	}
	${mediaQueries.xl} {
		min-width: 500px;
		height: 120%;
	}
	${mediaQueries["2xl"]} {
		margin-left: 50px;
	}
`;

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	min-height: 600px;
	height: calc(100vh - 64px);
	${mediaQueries.lg} {
		padding: 30px;
		height: auto;
		gap: 10px;
	}
	${mediaQueries.xl} {
		padding: 30px;
		height: auto;
		gap: 20px;
	}
`;

export const FooterContainer = styled.div`
	display: none;
	position: absolute;
	bottom: 0;
	${mediaQueries.lg} {
		display: block;
		width: 100%;
	}
`;

export const TextWrapper = styled.div`
	display: none;
	${mediaQueries.lg} {
		width: 100%;
		color: white;
		z-index: 99;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: max-content;
		margin: auto;
	}
`;

export const Text1 = styled(Text)`
	font-family: ${fontFamilies.openSans};
	font-weight: ${fontWeights.extraBold};
	text-decoration: underline;
	line-height: 63px;
	text-shadow: 0 1.3px 3px rgba(255, 255, 255, 0.25);
	${mediaQueries.lg} {
		font-size: 40px;
	}
	${mediaQueries.xl} {
		font-size: 50px;
	}
`;
export const Text2 = styled(Text)`
	font-family: ${fontFamilies.openSans};
	letter-spacing: 1.2px;
	${mediaQueries.lg} {
		letter-spacing: 2px;
		font-size: 13px;
	}
	${mediaQueries.xl} {
		letter-spacing: 2px;
		font-size: 15px;
	}
`;
