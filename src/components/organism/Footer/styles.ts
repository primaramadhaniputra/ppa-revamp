import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

interface IType {
	type?: string;
}

export const Wrapper = styled.div<IType>`
	padding: 15px 0;
	box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.25);
	background-color: white;
	${mediaQueries.lg} {
		display: ${(props) => (props.type === "dashboard" ? "flex" : null)};
		justify-content: ${(props) => (props.type === "dashboard" ? "space-between" : null)};
		align-items: ${(props) => (props.type === "dashboard" ? "center" : null)};
		padding: ${(props) => (props.type === "dashboard" ? "10px 100px" : null)};
	}
`;

export const FooterText = styled(Text)`
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.medium};
	font-size: ${fontSizing.sm.fontSize};
	${mediaQueries.lg} {
		font-size: ${fontSizing.md.fontSize};
	}
`;
