import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

interface IProps {
	progressColor?: string;
}

export const StyledCard = styled(Card)`
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 15px;
	padding: 18px;
	flex: 1;
	min-width: 250px;
`;

export const CardTitle = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: #000000;
`;

export const DescriptionText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 18px;
	line-height: 27px;
`;
export const PoinText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 18px;
	line-height: 27px;
	font-weight: 600;
`;

export const Progress = styled.progress<IProps>`
	border-radius: 8px;
	width: 100%;
	height: 27px;
	margin-top: 16px;
	/* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25); */
	&::-webkit-progress-bar {
		background: #f1f1fa;
		border-radius: 8px;
	}
	&::-webkit-progress-value {
		background: ${(props) => props.progressColor};
		border-radius: 8px;
	}
	&::-moz-progress-bar {
		/* style rules */
	}
`;
